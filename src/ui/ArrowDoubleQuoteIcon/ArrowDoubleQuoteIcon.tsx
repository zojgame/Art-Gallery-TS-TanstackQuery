import styles from './styles.module.scss';
import { DIRECTION } from '../../consts';

interface ArrowDoubleQuoteIconProps {
  direction?: DIRECTION;
  isDisabled?: boolean;
}

function ArrowDoubleQuoteIcon({
  direction,
  isDisabled,
}: ArrowDoubleQuoteIconProps) {
  const isRight = direction === DIRECTION.RIGHT;

  return (
    <svg
      className={`${styles.icon} ${!isRight ? `${styles.icon_left}` : ''} 
      ${isDisabled ? `${styles.disabled}` : ''}`}
      width="13.4"
      height="12.8"
      viewBox="0 0 14 13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.286 6.49988L6.19769 1.62545C5.83203 1.275 5.83203 0.706895 6.19769 0.356587C6.56335 0.00613754 7.15632 0.00613754 7.52213 0.356587L13.2727 5.86567C13.4556 6.04091 13.5469 6.27034 13.5469 6.49988C13.5469 6.72951 13.4554 6.9591 13.2727 7.13426L7.52213 12.6433C7.15632 12.9939 6.56332 12.9939 6.19769 12.6433C5.83203 12.293 5.83203 11.7248 6.19769 11.3745L11.286 6.49988ZM0.367995 11.3745C0.00233503 11.7248 0.00233503 12.293 0.367995 12.6433C0.733655 12.9939 1.32645 12.9939 1.69247 12.6433L7.44307 7.13428C7.6259 6.95913 7.71707 6.72953 7.71707 6.49991C7.71707 6.27037 7.62573 6.04077 7.44307 5.8657L1.69247 0.356587C1.32648 0.00613754 0.733655 0.00613754 0.367995 0.356587C0.00233503 0.706895 0.00233503 1.27498 0.367995 1.62545L5.45642 6.49988L0.367995 11.3745Z" />
    </svg>
  );
}

ArrowDoubleQuoteIcon.defaultProps = {
  isDisabled: false,
  direction: DIRECTION.RIGHT,
};

export { ArrowDoubleQuoteIcon };
