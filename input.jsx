import React from "react";

import { Controller } from "react-hook-form";

import { v4 as uuidv4 } from "uuid";

// import { Input } from 'antd';

import classNames from "classnames";

import Label from "../label";

import Error from "../error";

import { fieldPropTypes, fieldDefaultPropTypes } from "../proptypes";

const DInput = ({
  fieldProps,
  labelProps,
  errorProps,
  control,
  errors,
  containerProps,
}) => {
  const ID = uuidv4();

  return (
    <div className={classNames(containerProps.className)}>
      <Label
        labelProps={labelProps}
        id={ID}
        labelClassName={containerProps.labelClassName}
      />
      <span className="label-watermark">{labelProps.waterMark}</span>
      <div className={classNames(containerProps.fieldClassName)}>
        <Controller
          name={fieldProps.name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              {...fieldProps}
              id={ID}
              onChange={(ev) => {
                field.onChange(ev);
              }}
            />
          )}
        />
      </div>
      <Error errorProps={errorProps} errors={errors} name={fieldProps.name} />
    </div>
  );
};

DInput.defaultProps = fieldDefaultPropTypes;

DInput.propTypes = fieldPropTypes;

export default DInput;


import React from "react";

import { Controller } from "react-hook-form";

import { v4 as uuidv4 } from "uuid";

// import { Input } from 'antd';

import classNames from "classnames";

import get from "lodash/get";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import Label from "../label";

import Error from "../error";

import { fieldPropTypes, fieldDefaultPropTypes } from "../proptypes";

const DSelect = ({
  fieldProps,
  labelProps,
  errorProps,
  control,
  errors,
  containerProps,
}) => {
  const ID = uuidv4();
  const dd = useSelector((state) => state.dropdownDetails);
  let options = [];
  if (
    !isEmpty(fieldProps.dropdownOptions) &&
    Array.isArray(dd[fieldProps.dropdownOptions])
  ) {
    options = [
      ...[{ name: null, label: "" }],
      ...dd[fieldProps.dropdownOptions],
    ];
  } else {
    options = [
      ...[{ name: null, label: "" }],
      ...get(fieldProps, ["options"], []),
    ];
  }

  options = options.map((o) =>
    typeof o === "string" || typeof o === "number"
      ? { key: o, text: o }
      : { key: o.name, text: get(o, "label", o.name) },
  );

  return (
    <div className={classNames(containerProps.className)}>
      <Label
        labelProps={labelProps}
        id={ID}
        labelClassName={containerProps.labelClassName}
      />
      <span className="label-watermark">{labelProps.waterMark}</span>
      <div className={classNames(containerProps.fieldClassName)}>
        <Controller
          name={fieldProps.name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              {...fieldProps}
              id={ID}
              onChange={(ev) => {
                field.onChange(ev);
              }}
            >
              {options &&
                options.map((data) => (
                  <option key={data.key} value={data.key}>
                    {data.text}
                  </option>
                ))}
            </select>
          )}
        />
      </div>
      <Error errorProps={errorProps} errors={errors} name={fieldProps.name} />
    </div>
  );
};

DSelect.defaultProps = fieldDefaultPropTypes;

DSelect.propTypes = fieldPropTypes;

export default DSelect;

