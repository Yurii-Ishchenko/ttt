import s from './ColorPiker.module.css';

export default function ColorPiker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Piker</h2>
      <div>
        {options.map(option => (
          <span
            className={s.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}
