import { useState } from 'react'

/**
 * Calculator 组件 - 简单计算器
 * 支持加法和减法运算
 * @returns {React.JSX.Element} 计算器组件
 */
function Calculator() {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  /**
   * 执行加法运算
   */
  const handleAdd = () => {
    const a = parseFloat(num1) || 0
    const b = parseFloat(num2) || 0
    setResult(a + b)
  }

  /**
   * 执行减法运算
   */
  const handleSubtract = () => {
    const a = parseFloat(num1) || 0
    const b = parseFloat(num2) || 0
    setResult(a - b)
  }

  /**
   * 清空计算器
   */
  const handleClear = () => {
    setNum1('')
    setNum2('')
    setResult(null)
  }

  return (
    <div className="calculator">
      <h2>🔢 简单计算器</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="输入第一个数字"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="number-input"
        />
        <input
          type="number"
          placeholder="输入第二个数字"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="number-input"
        />
      </div>
      <div className="button-group">
        <button onClick={handleAdd} className="operator-btn add-btn">
          + 加法
        </button>
        <button onClick={handleSubtract} className="operator-btn sub-btn">
          − 减法
        </button>
        <button onClick={handleClear} className="clear-btn">
          清空
        </button>
      </div>
      {result !== null && (
        <div className="result">
          <span>结果：</span>
          <span className="result-value">{result}</span>
        </div>
      )}
    </div>
  )
}

export default Calculator
