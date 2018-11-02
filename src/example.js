// @flow
import React, { Component } from "react";
import styled from "styled-components";
import DynamicTable from "@atlaskit/dynamic-table";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import PageHeader from "@atlaskit/page-header";
import Select from "@atlaskit/select";
import { RadioGroup } from "@atlaskit/radio";

import Form, {
  Field,
  FieldGroup,
  FormHeader,
  FormSection,
  FormFooter
} from "@atlaskit/form";
import {
  DatePicker,
  DateTimePicker,
  TimePicker
} from "@atlaskit/datetime-picker";
import {
  caption,
  head,
  rows
} from "./packages/core/dynamic-table/examples/content/sample-data";

const Hyperlink = styled.a`
  background: #ddd;
  text-align: center;
  display: block;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  max-width: 150px;

  &:hover {
    background: #bbb;
  }
`;

type State = {
  eventResult: string
};

const depArrOptions = [
  { name: "deparr", value: "departures", label: "departures" },
  { name: "deparr", value: "arrivals", label: "arrivals" }
];

const timeOptions = [
  { label: "midnight - 6:00", value: "0" },
  { label: "6:00 - 12:00", value: "1" },
  { label: "12:00 - 18:00", value: "2" },
  { label: "18:00 - midnight", value: "3" }
];

export default class LayoutExample extends Component<void, State> {
  state = {
    eventResult:
      "Click into and out of the input above to trigger onBlur & onFocus in the Fieldbase"
  };

  formRef: any;

  // Form Event Handlers
  onSubmitHandler = () => {
    console.log("onSubmitHandler");
  };

  onValidateHandler = () => {
    console.log("onValidateHandler");
  };

  onResetHandler = () => {
    console.log("onResetHandler");
  };

  onChangeHandler = () => {
    console.log("onChangeHandler");
  };
  onBlurHandler = () => {
    console.log("onBlurHandler");
  };
  onFocusHandler = () => {
    console.log("onFocusHandler");
  };

  // Footer Button Handlers
  submitClickHandler = () => {
    this.formRef.submit();
  };

  validateClickHandler = () => {
    this.formRef.validate();
  };

  render() {
    return (
      <Page>
        <Form
          name="layout-example"
          onSubmit={this.onSubmitHandler}
          onReset={this.onResetHandler}
          ref={form => {
            this.formRef = form;
          }}
          action="//httpbin.org/get"
          method="GET"
          target="submitFrame"
        >
          <FormHeader title="" description="" />

          <FormSection name="section-1" title="" description="">
            <Grid layout="fluid" spacing="comfortable">
              <GridColumn>
                <PageHeader>(FRA) Frankfurt Airport Arrivals</PageHeader>
              </GridColumn>
            </Grid>

            <Grid layout="fluid" spacing="comfortable">
              <GridColumn medium="5">
                <Field label="Date">
                  <DatePicker defaultValue="2018-01-02" />
                </Field>
              </GridColumn>
            </Grid>
            <Grid layout="fluid" spacing="comfortable">
              <GridColumn medium="5">
                <Field label="Timespan" helperText="" invalidMessage="">
                  <Select
                    className=""
                    classNamePrefix=""
                    options={timeOptions}
                    placeholder=""
                    defaultValue={timeOptions[2]}
                  />
                </Field>
              </GridColumn>
              <GridColumn>
                <Field label=" ">
                  <RadioGroup
                    options={depArrOptions}
                    onChange={this.onChangeHandler}
                    defaultCheckedValue={depArrOptions[0].value}
                  />
                </Field>
              </GridColumn>
            </Grid>
          </FormSection>
        </Form>
        <Grid layout="fluid" spacing="comfortable">
          <GridColumn medium="4">
            <Hyperlink
              href="https://www.flightstats.com/v2/flight-tracker/departures/FRA"
              target="_blank"
            >
              More FRA Departures
            </Hyperlink>
          </GridColumn>
          <GridColumn medium="4">
            <Hyperlink
              href="https://www.flightstats.com/v2/airport-conditions/FRA"
              target="_blank"
            >
              FRA Weather
            </Hyperlink>
          </GridColumn>
          <GridColumn medium="4">
            <Hyperlink
              href="https://www.flightstats.com/v2/flight-tracker/arrivals/FRA"
              target="_blank"
            >
              More FRA Arrivals
            </Hyperlink>
          </GridColumn>
        </Grid>

        <Grid>
          <GridColumn>
            <DynamicTable
              caption=""
              head={head}
              rows={rows}
              rowsPerPage={10}
              defaultPage={1}
              loadingSpinnerSize="large"
              isLoading={false}
              isFixedSize
              defaultSortKey="term"
              defaultSortOrder="ASC"
              onSort={() => console.log("onSort")}
              onSetPage={() => console.log("onSetPage")}
            />
          </GridColumn>
        </Grid>
      </Page>
    );
  }
}
