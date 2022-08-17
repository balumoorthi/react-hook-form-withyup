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
