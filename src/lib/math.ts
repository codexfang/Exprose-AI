import { create, all } from 'mathjs'

const math = create(all, {})

const CALC_ALLOWED = /^[\d+\-*/().\s]+$/

export function evaluateExpression(expression: string): number {
  const trimmed = expression.trim()
  if (!trimmed) {
    throw new Error('Enter an expression to calculate.')
  }
  if (!CALC_ALLOWED.test(trimmed)) {
    throw new Error('Only numbers and + - * / ( ) are allowed.')
  }
  const result = math.evaluate(trimmed)
  if (typeof result !== 'number' || !Number.isFinite(result)) {
    throw new Error('Expression did not produce a numeric result.')
  }
  return result
}

export function normalizeEquation(input: string): string {
  let expr = input.trim()
  const match = expr.match(/^y\s*=\s*(.+)$/i)
  if (match) {
    expr = match[1].trim()
  }
  if (!expr) {
    throw new Error('Enter an equation like y = x^2.')
  }
  expr = expr.replace(/(\d)([a-zA-Z(])/g, '$1*$2')
  expr = expr.replace(/\)x/g, ')*x')
  return expr
}

export type PlotPoint = { x: number; y: number }

export function generatePlotPoints(
  equation: string,
  xMin = -10,
  xMax = 10,
  step = 0.1,
): PlotPoint[] {
  const expr = normalizeEquation(equation)
  const compiled = math.compile(expr)
  const points: PlotPoint[] = []

  for (let x = xMin; x <= xMax + step / 2; x += step) {
    const roundedX = Math.round(x * 10) / 10
    try {
      const y = compiled.evaluate({ x: roundedX })
      if (typeof y === 'number' && Number.isFinite(y)) {
        points.push({ x: roundedX, y })
      }
    } catch {
      // Skip undefined points (e.g. division by zero)
    }
  }

  if (points.length === 0) {
    throw new Error('Could not plot this equation. Check the syntax.')
  }

  return points
}
