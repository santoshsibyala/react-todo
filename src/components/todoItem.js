import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    <p style={{ marginTop: '0px', marginLeft: '10px' }}>{title}</p>
                </div>

                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>

        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;