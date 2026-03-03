import type { TableStep } from '../../../content/lessonTypes'

interface Props {
  step: TableStep
  onContinue: () => void
}

export function TableStepView({ step, onContinue }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {step.title && (
        <h3 className="text-xl font-semibold text-stone-900">{step.title}</h3>
      )}
      <div className="overflow-x-auto rounded-lg border border-stone-200">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-stone-100">
              {step.headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {step.rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? 'bg-white' : 'bg-stone-50'}
              >
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-stone-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
      >
        Continue
      </button>
    </div>
  )
}
