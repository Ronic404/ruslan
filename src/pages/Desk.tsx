import { Dispatch, FC, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setNameAction } from '../redux/actions';
import { Actions } from '../types/forRedux';

const DivDesks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivDesk = styled.div`
  position: relative;
  width: 40vw;
  height: 70vh;
  border: 2px dashed whitesmoke;
  border-radius: 10px;
  font-size: 1.5rem;
`;

const DeskTitle = styled.h3`
  text-align: center;
`;

const TaskCard = styled.p`
  border: 1px dotted burlywood;
  width: 90%;
  margin: 10px auto;
`;

interface IDeskProps {
  setNameAction: (name: string) => Actions;
};
interface ITask {
  id: number,
  title: string,
}

interface IDesk {
  id: number,
  title: string,
  tasks: ITask[],
}

const initialDesks: IDesk[] = [
  {
    id: 1,
    title: 'Сделать',
    tasks: [
      {
        id: 1,
        title: '1. Обзвонить клиентов',
      },
      {
        id: 2,
        title: '2. Повысить средний чек',
      },
    ],
  },
  {
    id: 2,
    title: 'Сделанно',
    tasks: [
      {
        id: 3,
        title: '3. Начать трансляцию',
      },
      {
        id: 4,
        title: '4. Спросить как дела',
      },
    ],
  },
];

// ----------------------------------------------

const Desk: FC<IDeskProps> = ({ setNameAction }) => {
  setNameAction('desk');

  const [desks, setDesks] = useState<IDesk[]>(initialDesks);
  const [currentDesk, setCurrentDesk] = useState<IDesk>(desks[0]);
  const [currentTask, setCurrentTask] = useState<ITask>(desks[0].tasks[0]);

  function dragStartHandler(e: any, desk: IDesk, task: ITask): void {
    setCurrentDesk(desk);
    setCurrentTask(task);
    e.target.style.background = 'grey';
    setTimeout(() => { e.target.style.opacity = '0.2' }, 0);
  };

  function dragEndHandler(e: any): void {
    e.target.style.background = 'transparent';
    e.target.style.opacity = '1';
  };

  function dragOverHandler(e: any): void {
    e.preventDefault();
    e.target.style.background = 'greenyellow';
  };

  function dragLeaveHandler(e: any): void {
    e.target.style.background = 'transparent';
  };

  function dropHandler(e: any, desk: IDesk, task: ITask): void {
    e.stopPropagation();
    e.target.style.background = 'transparent';
    const currentIndex: number = currentDesk.tasks.indexOf(currentTask);
    currentDesk.tasks.splice(currentIndex, 1);
    const dropIndex: number = desk.tasks.indexOf(task);
    desk.tasks.splice(dropIndex, 0, currentTask);
    setDesks(desks.map(d => {
      if (d.id === desk.id) {
        return desk;
      }
      if (d.id === currentDesk.id) {
        return currentDesk;
      }
      return d;
    }));
  };

  function dragOverDeskHandler(e: any): void {
    e.preventDefault();
  };

  function dropTaskHandler(e: any, desk: IDesk) {
    desk.tasks.push(currentTask);
    const currentIndex: number = currentDesk.tasks.indexOf(currentTask);
    currentDesk.tasks.splice(currentIndex, 1);
    setDesks(desks.map(d => {
      if (d.id === desk.id) {
        return desk;
      }
      if (d.id === currentDesk.id) {
        return currentDesk;
      }
      return d;
    }));
  }

  return (
    <>
      <h2>Задания:</h2>
      <DivDesks>
        {desks.map(desk => (
          <DivDesk
            key={desk.id}
            onDragOver={dragOverDeskHandler}
            onDrop={(e) => dropTaskHandler(e, desk)}
          >
            <DeskTitle>{desk.title}</DeskTitle>
            {desk.tasks.map(task => (
              <TaskCard
                key={task.id}
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, desk, task)}
                onTouchStart={(e) => dragStartHandler(e, desk, task)} // touch
                onDragEnd={dragEndHandler}
                onTouchEnd={dragEndHandler} // touch
                onDragOver={dragOverHandler}
                onDragLeave={dragLeaveHandler}
                onDrop={(e) => dropHandler(e, desk, task)}
                
              >
                {task.title}
              </TaskCard>
            ))}
          </DivDesk>
        ))}
      </DivDesks>
    </>
  );
}

// ----------------------------------------

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    setNameAction: function(name: string): any {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(Desk);

