import { useState } from "react"

const STEPS = [
    { 
      key: "name", 
      label: "Your name", 
      placeholder: "Asha Rao", 
      validate: (v) => v.trim().length > 0, 
      error: "Name is required"
     },
    { key: "email", 
      label: "Email", 
      placeholder: "asha@mail.com", 
      validate: (v) => /\S+@\S+\.\S+/.test(v), 
      error: "Enter a valid email" 
    },
    { key: "age", 
      label: "Age", 
      placeholder: "18", 
      validate: (v) => Number(v) >= 18, 
      error: "Must be 18 or older" 
    }
];

const ProgressbarValidation = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const value = form[current.key];
  const valid = current.validate(value);
  const progress = done ? 100 : Math.round((step / STEPS.length) * 100);

  const next = () => {
    if (!valid) {
      setTouched(true);
      return;
    }
    if (step === STEPS.length - 1) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
    setTouched(false);
  };

  const back = () => {
    setStep((s) => Math.max(0, s - 1));
    setTouched(false);
  };

  return (
    <div className="stepper">
      <div className="pbar">
        <div className="pbar-fill" style={{ width: progress + "%" }} />
      </div>

      {done ? (
        <p className="success">✅ All steps completed!</p>
      ) : (
        <>
          <p className="step-label">
            Step {step + 1} of {STEPS.length}: {current.label}
          </p>
          <input
            value={value}
            placeholder={current.placeholder}
            onChange={(e) => setForm({ ...form, [current.key]: e.target.value })}
          />
          {touched && !valid && <p className="err">{current.error}</p>}
          <div className="row">
            <button className="ghost" onClick={back} disabled={step === 0}>
              Back
            </button>
            <button className="primary" onClick={next}>
              {step === STEPS.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressbarValidation;