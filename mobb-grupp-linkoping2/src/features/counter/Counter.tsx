import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import {
  decrement,
  increment,
  double,
  saveCount,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const savedCount = useAppSelector(state => state.counter.savedCount)
  // --------------------------------------------------------------------------------------------------------------------------------
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >-</button>

        <span aria-label="Count" className={styles.value}>
          {count}
        </span>

        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >+</button>
        
        <button
          className={styles.button}
          aria-label="Double value"
          onClick={() => dispatch(double())}
        >Double</button>

        <button
          className={styles.button}
          aria-label="Save Count"
          onClick={() => dispatch(saveCount())}
        >Save Count</button>
        <p>Saved Count: {savedCount}</p>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
