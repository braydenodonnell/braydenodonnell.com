import classes from './Navigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <nav>
      <ul className={classes.navigation_list}>
        <li className={classes.navigation_item}>
          <a
            href='mailto:braydenodon@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon='envelope'
              className={classes['envelope-icon']}
            />
          </a>
        </li>
        <li className={classes.navigation_item}>
          <a
            href='https://github.com/braydenodonnell'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={classes['github-icon']}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
