import React, { useRef, useState, setValues } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

const styles = {
  main: {
    margin: "16px 8px 4px",
    border: 0,
    display: "inline-flex",
    padding: 0,
    position: "relative",
    minWidth: 0,
    flexDirection: "column",
    verticalAlign: "top"
  },
  test: {
    paddingTop: 50
  },
  label: {
    transform: "translate(14px, 17px) scale(1)",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 1,
    pointerEvents: "none",
    transformOrigin: "top left",
    transition:
      "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
  },
  labelFocus: {
    transform: "translate(14px, -6px) scale(0.75)"
  },
  labelColor: {
    color: "#42A5F5"
  },
  inputBlock: {
    position: "relative",
    color: "rgba(0, 0, 0, 0.87)",
    cursor: "text",
    display: "inline-flex",
    fontSize: "1rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: "1.1875em",
    alignItems: "center"
  },
  fieldset: {
    paddingLeft: 28.875,
    top: -5,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    position: "absolute",
    borderColor: "rgba(0, 0, 0, 0.23)",
    transition:
      "padding-left 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, border-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    pointerEvents: "none"
  },
  fieldsetFocus: {
    borderColor: "#42A5F5",
    borderWidth: 2
  },
  legend: {
    width: 0.01,
    height: 15,
    padding: 0,
    textAlign: "left",
    transition: "width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    lineHeight: 11
  },
  code: {
    textAlign: "left",
    lineHeight: 11
  },
  input: {
    font: "inherit",
    color: "currentColor",
    width: "100%",
    border: 0,
    margin: 0,
    padding: "6px 0 7px",
    display: "block",
    minWidth: 0,
    boxSizing: "content-box",
    background: "none",
    paddingTop: 15,
    paddingBottom: 15,
    padding: "18.5px 14px",
    "&:focus": {
      outline: 0
    }
  }
};

const Input = ({ classes }) => {
  const labelRef = useRef(null);
  const [values, setValues] = useState({
    isFocus: false,
    input: "",
    labelWidth: 0
  });
  console.log(labelRef.current);

  const handleFocus = () => {
    setValues({
      ...values,
      isFocus: true,
      labelWidth:
        labelRef.current.offsetWidth > 0
          ? labelRef.current.offsetWidth * 0.75 + 8
          : 0
    });
  };
  const handleBlur = () => {
    setValues({ ...values, isFocus: false });
    console.log(values.isFocus);
  };
  const handleChange = e => {
    setValues({ ...values, input: e.target.value });
  };
  return (
    <div className={classes.main}>
      <label
        data-shrink="false"
        htmlFor="outlined-dense"
        className={classNames(
          classes.label,
          values.isFocus || values.input ? classes.labelFocus : "",
          values.isFocus ? classes.labelColor : ""
        )}
        ref={labelRef}
      >
        Dense
      </label>
      <div className={classes.inputBlock}>
        <fieldset
          aria-hidden="true"
          className={classNames(
            classes.fieldset,
            values.isFocus ? classes.fieldsetFocus : ""
          )}
          style={{
            paddingLeft: 8
          }}
        >
          <legend
            className={classes.legend}
            style={{
              width: values.isFocus || values.input ? values.labelWidth : 0.01
            }}
          >
            <span className={classes.code}>​</span>
          </legend>
        </fieldset>
        <input
          className={classes.input}
          aria-invalid="false"
          id="outlined-dense"
          type="text"
          value={values.input}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  );
};

const StyledInput = injectSheet(styles)(Input);

export default StyledInput;
