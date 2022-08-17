<div className="row">
              <Input
                containerProps={{
                  className: "form-group col-12 mb-3",
                  labelClassName: "required",
                }}
                fieldProps={{
                  type: "text",
                  name: "title",
                  className: `form-control ${errors.title ? "is-invalid" : ""}`,
                  disabled: isLoading,
                }}
                labelProps={{ name: "Event Title" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              <TextArea
                containerProps={{
                  className: "form-group col-12 mb-3",
                  // labelClassName: "required",
                }}
                fieldProps={{
                  name: "about",
                  maxLength: 100,
                  className: `form-control ${errors.about ? "is-invalid" : ""}`,
                  disabled: isLoading,
                }}
                labelProps={{ name: "Event Description" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              <DatePicker
                label="Start Date"
                fieldKey="start_datetime"
                value={startDateTime}
                required
                errors={errors}
              >
                <DatePickerInput
                  containerProps={{
                    className: "input-calender-type form-group col-12",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    type: "date",
                    minDate: new Date(),
                    name: "start_datetime",
                    className: `form-control ${
                      errors.start_datetime ? "is-invalid" : ""
                    }`,
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              </DatePicker>
              <DatePicker
                label="End Date"
                fieldKey="end_datetime"
                value={endDateTime}
                required
                errors={errors}
              >
                <DatePickerInput
                  containerProps={{
                    className: "input-calender-type form-group col-12",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    minDate: getValues("start_datetime") || "",
                    type: "date",
                    name: "end_datetime",
                    className: `form-control ${
                      errors.end_datetime ? "is-invalid" : ""
                    }`,
                    autoFocus: !!errors.end_datetime,
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              </DatePicker>
              <div className="row">
                <Select
                  containerProps={{
                    className: "form-group col-7 mb-3",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    name: "sector",
                    className: `form-control ${
                      errors.sector ? "is-invalid" : ""
                    }`,
                    options: [
                      { name: "School", label: "School" },
                      { name: "Armed Forces", label: "Armed Forces" },
                      { name: "College", label: "College" },
                      { name: "Corporate", label: "Corporate" },
                      { name: "Hospital", label: "Hospital" },
                      { name: "Law", label: "Law" },
                      { name: "Apartment", label: "Apartment" },
                      { name: "Police", label: "Police" },
                      { name: "Temple", label: "Temple" },
                      { name: "Villages", label: "Villages" },
                      { name: "Yoga", label: "Yoga" },
                      { name: "Others", label: "Others" },
                    ],
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "Sector" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
                <CheckBox
                  containerProps={{
                    className: "form-group govt-flag-input mt-4 col-5",
                    fieldClassName: "form-check",
                  }}
                  fieldProps={{
                    type: "checkbox",
                    name: "govtFlag",
                    className: "form-check-input custom-input-checkbox",
                    disabled: govtFlagDisabled,
                  }}
                  labelProps={{ name: "Govt Flag" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              </div>
              {showSectorInput && (
                <Input
                  containerProps={{
                    className: "form-group col-12 mb-3",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    className: `form-control ${
                      errors.sectorOthers ? "is-invalid" : ""
                    }`,
                    type: "text",
                    name: "sectorOthers",
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "Other" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              )}
              <Select
                containerProps={{ className: "form-group col-12 mb-3" }}
                fieldProps={{
                  name: "industry",
                  className: "form-control",
                  options: [
                    { name: "Govt School", label: "Govt School" },
                    { name: "Govt Aided School", label: "Govt Aided School" },
                    {
                      name: "International School",
                      label: "International School",
                    },
                    { name: "Private School", label: "Private School" },
                    { name: "Training Academy", label: "Training Academy" },
                  ],
                  disabled: isLoading,
                }}
                labelProps={{ name: "Industry" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              <Select
                containerProps={{
                  className: "form-group col-12 mb-3",
                  labelClassName: "required",
                }}
                fieldProps={{
                  name: "organization",
                  className: `form-control ${
                    errors.organization ? "is-invalid" : ""
                  }`,
                  // options: [
                  //     { name: "Accenture", label: "Accenture" },
                  //     { name: "SRM College", label: "SRM College" },
                  //     { name: "CRPF", label: "CRPF" },
                  //     { name: "BPCL", label: "BPCL" },
                  //     { name: "Marvel Apts", label: "Marvel Apts" },
                  //     { name: "Delhi Public School", label: "Delhi Public School" },
                  //     { name: "Govt School", label: "Govt School" },
                  //     { name: "Air Force School", label: "Air Force School" },
                  //     { name: "Amer Public School", label: "Amer Public School" },
                  // ],
                  dropdownOptions: "organization",
                  disabled: isLoading,
                }}
                labelProps={{ name: "Organization" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              {showOrganizationInput && (
                <Input
                  containerProps={{
                    className: "form-group col-12 mb-3",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    className: `form-control ${
                      errors.organizationOthers ? "is-invalid" : ""
                    }`,
                    type: "text",
                    name: "organizationOthers",
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "Other" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              )}
              <RadioGroup
                containerProps={{ className: "form-group col-12 mb-3" }}
                fieldProps={{
                  name: "onlineSession",
                  className: "radio-group-container",
                  options: [
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ],
                  disabled: isLoading,
                }}
                labelProps={{ name: "Online Session?" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              <Select
                containerProps={{ className: "form-group col-12 mb-3" }}
                fieldProps={{
                  name: "locationScope",
                  className: "form-control",
                  options: [
                    { name: "One-City", label: "One-City" },
                    { name: "Multi-City", label: "Multi-City" },
                    { name: "Country-wide", label: "Country-wide" },
                    { name: "Global", label: "Global" },
                  ],
                  disabled: isLoading,
                }}
                labelProps={{ name: "Location Scope" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              {/* <Select
                        containerProps={{ className: "form-group col-12 mb-3", labelClassName: "required" }}
                        fieldProps={{
                            name: "location", className: `form-control ${errors.location ? 'is-invalid' : ''}`,
                            options: [
                                { name: "location1", label: "location1" },
                                { name: "location2", label: "location2" },
                                { name: "location3", label: "location3" },
                            ]
                        }}
                        labelProps={{ name: "Location" }}
                        errorProps={{ className: "is-invalid-feedback" }}
                        control={control}
                        errors={errors}
                    /> */}
              {/* <AutoSuggest
                                containerProps={{ className: "form-group col-12 mb-3", labelClassName: "required" }}
                                fieldProps={{ type: "city", name: "location", className: `form-control ${errors.location ? 'is-invalid' : ''}`, disabled: isLoading }}
                                labelProps={{ name: "Location" }}
                                errorProps={{ className: "is-invalid-feedback" }}
                                control={control}
                                errors={errors}
                            /> */}
              <Input
                containerProps={{
                  className: "form-group col-12 mb-3",
                  labelClassName: "required",
                }}
                fieldProps={{
                  type: "text",
                  name: "location",
                  className: `form-control ${
                    errors.location ? "is-invalid" : ""
                  }`,
                  disabled: isLoading,
                }}
                labelProps={{
                  name: "Location",
                  waterMark: "(City / Town / Village) / State eg. Chennai / TN",
                }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              <Select
                containerProps={{ className: "form-group col-12 mb-3" }}
                fieldProps={{
                  name: "programType",
                  className: "form-control",
                  options: [
                    {
                      name: "Introductory Session: 1-Day",
                      label: "Introductory Session: 1-Day",
                    },
                    {
                      name: "Introductory Sessions: 3-Day",
                      label: "Introductory Sessions: 3-Day",
                    },
                    { name: "HELP", label: "HELP" },
                    { name: "INSPIRE", label: "INSPIRE" },
                    { name: "THW Curriculum", label: "THW Curriculum" },
                    { name: "HEART", label: "HEART" },
                    {
                      name: "Resiliece in Crisis",
                      label: "Resiliece in Crisis",
                    },
                    { name: "Manage Exam Stress", label: "Manage Exam Stress" },
                    { name: "Others", label: "Others" },
                  ],
                  disabled: isLoading,
                }}
                labelProps={{
                  name: "Program Type",
                  waterMark: "eg. Inspire, THW, Heart, HELP, Essay for Schools",
                }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              {showProgramTypeInput && (
                <Input
                  containerProps={{
                    className: "form-group col-12 mb-3",
                  }}
                  fieldProps={{
                    type: "text",
                    name: "programTypeOthers",
                    className: `form-control`,
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "Other" }}
                  control={control}
                  errors={errors}
                />
              )}
              <Select
                containerProps={{
                  className: "form-group col-12 mb-3",
                  labelClassName: "required",
                }}
                fieldProps={{
                  name: "typeOfEvent",
                  className: `form-control ${
                    errors.typeOfEvent ? "is-invalid" : ""
                  }`,
                  options: [
                    { name: "1-session", label: "1-session" },
                    { name: "3-day", label: "3-day" },
                    { name: "'n' week program", label: "'n' week program" },
                    { name: "Retreat", label: "Retreat" },
                    { name: "Seminar", label: "Seminar" },
                    { name: "Webinars", label: "Webinars" },
                    { name: "Follow-up", label: "Follow-up" },
                    { name: "Open-ended", label: "Open-ended" },
                    { name: "Others", label: "Others" },
                  ],
                  disabled: isLoading,
                }}
                labelProps={{ name: "Type of Event" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
              {showTypeOfEventInput && (
                <Input
                  containerProps={{
                    className: "form-group col-12 mb-3",
                    labelClassName: "required",
                  }}
                  fieldProps={{
                    type: "text",
                    name: "typeOfEventOthers",
                    className: `form-control ${
                      errors.typeOfEventOthers ? "is-invalid" : ""
                    }`,
                    disabled: isLoading,
                  }}
                  labelProps={{ name: "Other" }}
                  errorProps={{ className: "is-invalid-feedback" }}
                  control={control}
                  errors={errors}
                />
              )}
              {/* <AutoSuggest
                                containerProps={{ className: "form-group col-12 mb-3", labelClassName: "required" }}
                                fieldProps={{ type: "category", name: "typeOfEvent", className: `form-control ${errors.typeOfEvent ? 'is-invalid' : ''}`, disabled: isLoading }}
                                labelProps={{ name: "Type of Event" }}
                                errorProps={{ className: "is-invalid-feedback" }}
                                control={control}
                                errors={errors}
                            /> */}
              <Input
                containerProps={{
                  className: "form-group col-12 mb-3",
                  labelClassName: "required",
                }}
                fieldProps={{
                  type: "number",
                  name: "maxParticipants",
                  className: `form-control ${
                    errors.maxParticipants ? "is-invalid" : ""
                  }`,
                  disabled: isLoading,
                }}
                labelProps={{ name: "Max Participants" }}
                errorProps={{ className: "is-invalid-feedback" }}
                control={control}
                errors={errors}
              />
            </div>
