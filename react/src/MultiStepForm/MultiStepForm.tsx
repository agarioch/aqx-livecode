import clsx from 'clsx';

import StepNav from './StepNav';
import styles from './MultiStepForm.module.css';
import { FormEvent, useState } from 'react';
import RadioGroup from './RadioGroup';

const ROLES = [
  {
    value: 'broker',
    label: 'Broker',
    description: 'For individual brokers looking to manage their own listings.',
  },
  {
    value: 'ops',
    label: 'Ops',
    description: 'For operations managers who need to keep track of all listings and activity.',
  },
  {
    value: 'admin',
    label: 'Admin',
    description: 'For administrators who need to manage all users and listings.',
  },
];

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({name, email, role});
  }

  const handleReset = () => {
    setName('');
    setEmail('');
    setRole('');
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header className={styles.header}>
        <StepNav />
      </header>

      <div className={styles.container}>

      <section className={styles.step}>
        <h2>Account information</h2>

        <label htmlFor='name'>Name:</label>
        <input id='name' type="text" value={name} onChange={(event) => setName(event.target.value)}/>

        <label htmlFor='email'>Email:</label>
        <input id='email' type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </section>

      <section className={styles.step}>
        <h2>Application role</h2>

        <RadioGroup
          values={ROLES}
          currentValue={role}
          handleChangeValue={setRole}
        />
      </section>

      <section className={styles.step}>
        <h2>Review account details</h2>
        <dl>
          <dt>Name:</dt>
          <dd>{name}</dd>
          <dt>Email:</dt>
          <dd>{email}</dd>
          <dt>Role:</dt>
          <dd>{role}</dd>
        </dl>
      </section>
      </div>
    <div className={styles.actionsBackground}>
      <section className={`${styles.actions} ${styles.container}`}>
        <button
          className={clsx(styles.btn, styles.secondary)}
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type='submit'
          className={clsx(styles.btn, styles.primary)}
        >
          Continue »
        </button>
      </section>
      </div>
    </form>
  );
}

export default SignupForm;