import React, { useState } from 'react';
import { setInterval, clearInterval } from 'timers';
//import { setInterval } from 'timers/promises';
//import { TimerOptions } from 'timers';
//import exp from 'constants';
//const exp = require('constants');
//navigator.connection.downlink


const Counter = function CounterFunc(x1: { val2: number, key2: string }) {


    //хуки: useState, useEffect, useRef, useMemo, useCallback, useContext
    //установка хука (она вызвется только 1 раз):
    const [count, setCount] = useState(Number.parseInt(x1.val2.toString()));//тут якась хрінь з типом змінної x1.val2, обявлена як number але всі делають від що вона string
    const [stateTimerSet, setTimerTo] = useState(false);
    const [stateIntervalID, setIntervalTo] = useState(setInterval(() => { }, undefined));//попытка придумать пустую переменную типа NodeJS.Timer
    //let intervalID: NodeJS.Timer;
    //console.log('tVal2=' + typeof x1.val2 + ', val2=' + x1.val2 + ', tKey2=' + typeof x1.key2 + ', key2=' + x1.key2 + ', tInterv=' + typeof intervalID + ', Interv=' + intervalID);
    //const [intervalID, setIntervalTo] = useState(NodeJS.Timer);
    //let timerSet: boolean = false;
    //clearInterval(timerID);

    //const timerID = setInterval(
    //    () => tick(),
    //    1000
    //);

    function mySet(newVal: number) {
        //    setCount(count + 1);
        setCount(newVal);
        console.log('set=' + newVal);
    }
    function myReset() {
        setCount(x1.val2);
    }
    function tick(a: string, b: string) {
        //mySet(count + 1);//  
        //setCount(count + 1);
        mySet(count + Number.parseInt(a));
        console.log('tick' + x1.key2 + '(' + stateIntervalID + '), a=' + a + ',b=' + b);
    }
    function inc() { mySet(count + 1); }
    function dec() { mySet(count - 1); }
    function set() { mySet(10); }
    function reset() { myReset(); }
    function mySetTimer() {
        if (stateTimerSet === false) { //((intervalID === undefined) || (intervalID === 0)) 
            /*intervalID = setInterval(
                () => tick(),
                1000
            );*/
            setIntervalTo(setInterval(tick, 1000, count, 'b'));
            setTimerTo(true);
            console.log('SET timer' + x1.key2 + '(' + stateIntervalID + ')=' + stateTimerSet);
            //return intervalID2;
        } else {
            //console.log('ALREADY timer' + x1.key2 + '(' + intervalID + ')=' + timerSet);
            //return intervalID;
        }


    }
    function myClearTimer() {
        if (stateTimerSet === true) {  //(intervalID != undefined) {
            //console.log('timer' + x1.key2 + '(' + intervalID + ')=' + stateTimerSet);
            console.log('timer' + x1.key2 + '(' + stateIntervalID + ')=' + stateTimerSet);
            setTimerTo(false);
            clearInterval(stateIntervalID);
            //clearInterval(intervalID);

        }

    }


    return (
        <div>
            <h1 align={'center'}> {count} </h1>
            <button onClick={inc}> Увеличить </button><br />
            <button onClick={dec}> Уменьшить </button><br />
            <button onClick={set}> Установить </button><br />
            <button onClick={reset}>Ресет</button><br />
            <button onClick={mySetTimer} hidden={stateTimerSet}> Таймер ON</button><br hidden={stateTimerSet} />
            <button onClick={myClearTimer} hidden={!stateTimerSet}>Таймер OFF</button>
        </div>
    )
}

export default Counter;