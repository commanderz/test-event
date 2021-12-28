import React, { useState, useEffect } from 'react';
import { setInterval, setImmediate, setTimeout, clearInterval, clearImmediate, clearTimeout } from 'timers';
//import { ThemeContext, LocalteContext } from './context';
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
    //setInterval,setImmediate,setTimeout - 
    const [stateIntervalID, setIntervalTo] = useState(setInterval(() => { }, undefined));//попытка придумать пустую переменную типа NodeJS.Timer
    const width = useCustomWidth();
    useEffect(() => {
        document.title = 'w=' + width;
    });



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
        setCount(newVal);
        //setCount({ newVal: count });
        console.log('set=' + newVal);
    }
    function myReset() {
        setCount(x1.val2);
    }
    function tick(a: number, b: string) {
        //mySet(count + 1);//  
        //setCount(count + 1);

        mySet(count + 1);
        console.log('tick' + x1.key2 + '(), a=' + a + ',b=' + b + ', count=' + count);//stateIntervalID
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
            console.log('SET timer' + x1.key2 + '()=' + stateTimerSet);//stateIntervalID
            //return intervalID2;
        } else {
            //console.log('ALREADY timer' + x1.key2 + '(' + intervalID + ')=' + timerSet);
            //return intervalID;
        }

    }
    function myClearTimer() {
        if (stateTimerSet === true) {  //(intervalID != undefined) {
            //console.log('timer' + x1.key2 + '(' + intervalID + ')=' + stateTimerSet);
            clearInterval(stateIntervalID);
            setTimerTo(false);
            console.log('timer' + x1.key2 + '()=' + stateTimerSet);//stateIntervalID
        }

    }
    function useCustomWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => { setWidth(window.innerWidth) }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener;
            }
        });
        return width;

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