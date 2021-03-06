import React, { useCallback, useState } from 'react';
import AddNewItemForm from '../common/AddNewItemForm/AddNewItemForm';
import EditableTextLine from '../common/EditableTextLine/EditableTextLine';
import FilterPanel from './FilterPanel';
import TaskList from './TaskList';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { useDispatch } from 'react-redux';
import { changeTodolistTitleTC, deleteTodolistTC, TodoListDomainType, toggleTodolistCollapseAC } from '../../bll/todoListsReducer';
import { addNewTaskTC } from '../../bll/taskListsReducer';
import ConfirmModal from '../common/ConfirmModal/ConfirmModal';


const TodoList: React.FC<TodoListPropsType> = ({todoList}) => {
	// console.log('TodoList rendered');
	const {id, title, currentFilter, isCollapsed} = todoList;
	const todoListId = id;

	const [displayModal, setModalDisplay] = useState(false);
	const dispatch = useDispatch();	

	const deleteTodoList = () => {
		setModalDisplay(true);
	}
	const closeModal = useCallback( () => {
		setModalDisplay(false);
	}, []);
	const confirmTodoListRemoving = useCallback( (confirm: boolean) => {
		confirm && dispatch( deleteTodolistTC(todoListId) );
		setModalDisplay(false);
	}, [dispatch, todoListId]);

	const addNewTask = useCallback( (title: string) => {
		dispatch(addNewTaskTC(todoListId, title));
	}, [dispatch, todoListId]);

	const changeTodoListTitle = useCallback( (newTitle: string) => {
		dispatch( changeTodolistTitleTC(todoListId, newTitle) )
	}, [dispatch, todoListId]);

	const collapseList = useCallback( () => {
		dispatch( toggleTodolistCollapseAC(todoListId) );
	}, [dispatch, todoListId]);

	
	// console.log(`todolist id: [${todoListId}] rerendered`);
    return (
		<Grid item xs={12} md={6} lg={4}>
			<Paper elevation={6}>

				{/* TodoList Header */}
				<Box sx={{position: 'relative', display: 'flex', alignItems: 'center', pt: 1, pr: 4, pb: 1, pl: 4, mb: 4, borderBottom: theme => `1px solid ${theme.palette.divider}`}}>
					<Typography variant="h5" gutterBottom component="span" sx={{mb: 0}}>
						<EditableTextLine text={title} setNewText={changeTodoListTitle} disabled={todoList.requestStatus === 'loading'}/>
					</Typography>

					<IconButton onClick={collapseList} >
						{isCollapsed ?  <ExpandMoreIcon fontSize="large"/> : <ExpandLessIcon fontSize="large"/>}
					</IconButton>

					<IconButton onClick={deleteTodoList} color="error" sx={{position: 'absolute', top: '0.1em', right: '0.1em'}}>
						<PlaylistRemoveIcon fontSize="large" />
					</IconButton>
				</Box>
				
				{/* TodoList Body */}
				<Collapse in={!isCollapsed}>
					<Box sx={{pr: 4, pb: 4, pl: 4}}>
						<AddNewItemForm addItem={addNewTask} disabled={todoList.requestStatus === 'loading'} />
						<TaskList todoListId={todoListId} todoListCurrentFilter={currentFilter}/>
						<FilterPanel todoListId={todoListId} currentFilter={currentFilter}/>
					</Box>
				</Collapse>
				
			</Paper>

			<ConfirmModal 
                title={`Delete "${title}" to-do list?`}
                displayModal={displayModal}
                onAnswerCallback={confirmTodoListRemoving}
                onOverlayClose={closeModal}/>
		</Grid>
    )
}

export default React.memo(TodoList);


type TodoListPropsType = {
	todoList: TodoListDomainType
}