import React from 'react'
import Circles from '../Circles'
import { useState } from 'react'
import useRead from '../../hooks/useRead'
import { Container } from '@mui/material';
export default function CreateSitPlan() {
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(1);

  // Function to increase the number of columns
  const incrementColumns = () => {
    setColumns((prevColumns) => prevColumns + 1);
  };

  // Function to decrease the number of columns
  const decrementColumns = () => {
    if (columns > 0) {
      setColumns((prevColumns) => prevColumns - 1);
    }
  };

  // Function to increase the number of rows
  const incrementRows = () => {
    setRows((prevRows) => prevRows + 1);
  };

  // Function to decrease the number of rows
  const decrementRows = () => {
    if (rows > 0) {
      setRows((prevRows) => prevRows - 1);
    }
  };

  // Create arrays of 'columns' and 'rows' lengths to render multiple Circles
  const columnArray = Array.from({ length: columns });
  const rowArray = Array.from({ length: rows });

  return (
    <>
      <Container>
        <div>
          <button onClick={incrementColumns}>Add Column</button>
          <button onClick={decrementColumns}>Delete Column</button>
          <button onClick={incrementRows}>Add Row</button>
          <button onClick={decrementRows}>Delete Row</button>
          {columnArray.map((_, columnIndex) => (
            <div key={`column-${columnIndex}`} style={{ display: 'flex' }}>
              {rowArray.map((_, rowIndex) => (
                <Circles key={`circle-${columnIndex}-${rowIndex}`} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};



