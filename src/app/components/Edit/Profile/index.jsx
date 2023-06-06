import { useToggle } from '../../../../hooks/useToggle';
import { Password } from './Password';
import { User } from './User';

export const Profile = () => {
  const [activeChangePassword, toggleActiveChangePassword] = useToggle(false);
  return (
    <>
      {!activeChangePassword && <User toggleActiveChangePassword={toggleActiveChangePassword} />}
      {activeChangePassword && <Password toggleActiveChangePassword={toggleActiveChangePassword} />}
    </>
  );
};
