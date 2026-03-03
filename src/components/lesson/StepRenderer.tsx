import type { LessonStep } from '../../content/lessonTypes'
import { TextStepView } from './steps/TextStepView'
import { TableStepView } from './steps/TableStepView'
import { RuleStepView } from './steps/RuleStepView'
import { ExampleStepView } from './steps/ExampleStepView'
import { PracticeStepView } from './steps/PracticeStepView'
import { DialogueStepView } from './steps/DialogueStepView'
import { InfoCardStepView } from './steps/InfoCardStepView'

interface Props {
  step: LessonStep
  onContinue: () => void
}

export function StepRenderer({ step, onContinue }: Props) {
  switch (step.kind) {
    case 'text':
      return <TextStepView step={step} onContinue={onContinue} />
    case 'table':
      return <TableStepView step={step} onContinue={onContinue} />
    case 'rule':
      return <RuleStepView step={step} onContinue={onContinue} />
    case 'example':
      return <ExampleStepView step={step} onContinue={onContinue} />
    case 'practice':
      return <PracticeStepView step={step} onContinue={onContinue} />
    case 'dialogue':
      return <DialogueStepView step={step} onContinue={onContinue} />
    case 'info_card':
      return <InfoCardStepView step={step} onContinue={onContinue} />
  }
}
