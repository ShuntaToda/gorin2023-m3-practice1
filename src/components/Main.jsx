import React, { useEffect, useState } from "react";
import { Field } from "./Field";
import { fieldAPI } from "../api/field";
import { ResultTable } from "./ResultTable";
import { storeResultAPI } from "../api/results";

export const Main = () => {
  const [isStart, setIsStart] = useState(false);
  const [field, setField] = useState([]);
  const [blockMove, setBlockMove] = useState(0);
  const [time, setTime] = useState(0);

  const handleSetField = async () => {
    const data = await fieldAPI();
    const gotField = data.objects;
    setField(gotField);
  };

  useEffect(() => {
    if (localStorage.getItem("field") && localStorage.getItem("time") && localStorage.getItem("blockMove")) {
      setField(JSON.parse(localStorage.getItem("field")));
      setTime(Number(localStorage.getItem("time")));
      setBlockMove(Number(localStorage.getItem("blockMove")));
      setIsStart(true);
    } else {
      handleSetField();
    }
  }, []);

  useEffect(() => {
    let interval;

    // isStartがtrueの場合、時間測定を開始
    if (isStart) {
      interval = setInterval(() => {
        setTime((prevTime) => Math.floor(prevTime + 1)); // 前の時間に1秒追加
      }, 100); // 1秒毎に更新
    }

    // コンポーネントがアンマウントされた場合、またはisStartがfalseになった場合、時間測定を停止
    return () => {
      clearInterval(interval);
    };
  }, [isStart]);

  const addMove = () => {
    setBlockMove(blockMove + 1);
  };

  const storeResult = async () => {
    const data = await storeResultAPI({ time: time / 10, block_moves: blockMove });
    handleSetField();
  };

  const storeLocalStrage = () => {
    localStorage.setItem("field", JSON.stringify(field));
    localStorage.setItem("time", time);
    localStorage.setItem("blockMove", blockMove);
  };

  const handleGoal = () => {
    localStorage.removeItem("field");
    localStorage.removeItem("time");
    localStorage.removeItem("blockMove");
    setField([]);
    setTime(0);
    setBlockMove(0);
    storeResult();
  };
  return (
    <div>
      <div className="fs-1 mt-4">
        <span className="pe-3">Time</span>
        <span>{time / 10}</span>
      </div>
      <div className="fs-1">
        <span className="pe-3">Move</span>
        <span>{blockMove}</span>
      </div>
      {isStart ? (
        <Field
          field={field}
          setField={setField}
          addMove={addMove}
          setIsStart={setIsStart}
          storeLocalStrage={storeLocalStrage}
          handleGoal={handleGoal}
        />
      ) : (
        <div>
          <ResultTable></ResultTable>
          <div className="w-full py-5 mt-5 text-center">
            <div
              className="btn btn-lg btn-outline-primary"
              onClick={() => {
                setIsStart(true);
              }}
            >
              Start
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
