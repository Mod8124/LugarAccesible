import { FeedbackUser } from './User';
import { FeedbackThanks } from './Thanks';
import { FeedBackOverall } from './Overall';
import { FeedbackLogic } from './FeedbackLogic';
import { ModalSide } from '../Modal-Side';

const Feedback = () => {
  const { closeView, active, toggleActive, changeView, view } = FeedbackLogic();

  return (
    <article>
      <button
        onClick={closeView}
        className='fixed top-2/4 -right-[55px] text-white font-bold uppercase min-h-[40px] min-w-[150px] -rotate-90 bg-primary-900 z-[1]'
      >
        Feedback
      </button>
      {active && (
        <ModalSide
          title={
            view === 'recommend'
              ? 'TU EXPERIENCIA'
              : view === 'user'
              ? 'UN POCO SOBRE TI'
              : 'MUCHAS GRACIAS'
          }
          toggleActive={toggleActive}
        >
          {view === 'recommend' && <FeedBackOverall changeView={changeView} />}
          {view === 'user' && <FeedbackUser data-testid='feedbackUser' changeView={changeView} />}
          {view === 'thanks' && <FeedbackThanks />}
        </ModalSide>
      )}
    </article>
  );
};

export default Feedback;
