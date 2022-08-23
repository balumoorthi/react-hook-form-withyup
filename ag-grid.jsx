import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "GroupA",
          children: [
            {
              headerName: "Group1",
              children: [
                {
                  headerName: "Group",
                  valueGetter: "data.country.charAt(0)",
                  width: 75
                },
                {
                  headerName: "Year",
                  field: "year",
                  width: 75
                }
              ]
            },
            {
              headerName: "Group2",
              children: [
                {
                  headerName: "Date",
                  field: "date",
                  width: 110
                },
                {
                  headerName: "Sport",
                  field: "sport",
                  width: 110
                },
                {
                  headerName: "Gold",
                  field: "gold",
                  width: 100
                }
              ]
            }
          ]
        },
        {
          headerName: "GroupB",
          children: [
            {
              headerName: "Group11",
              children: [
                {
                  headerName: "Athlete",
                  field: "athlete",
                  width: 150
                },
                {
                  headerName: "Age",
                  field: "age",
                  width: 90,
                  cellClassRules: {
                    lessThan23IsGreen: function(params) {
                      return params.value < 23;
                    },
                    lessThan20IsBlue: function(params) {
                      return params.value < 20;
                    }
                  }
                },
                {
                  headerName: "Country",
                  field: "country",
                  width: 120
                }
              ]
            },
            {
              headerName: "Group2",
              children: [
                {
                  headerName: "Silver",
                  field: "silver",
                  width: 100
                },
                {
                  headerName: "Bronze",
                  field: "bronze",
                  width: 100
                },
                {
                  headerName: "Total",
                  field: "total",
                  width: 100
                }
              ]
            }
          ]
        }
      ],
      rowSelection: "multiple",
      pinnedTopRowData: [
        {
          athlete: "Floating Top Athlete",
          age: 999,
          country: "Floating Top Country",
          year: 2020,
          date: "01-08-2020",
          sport: "Floating Top Sport",
          gold: 22,
          silver: 33,
          bronze: 44,
          total: 55
        }
      ],
      pinnedBottomRowData: [
        {
          athlete: "Floating Bottom Athlete",
          age: 888,
          country: "Floating Bottom Country",
          year: 2030,
          date: "01-08-2030",
          sport: "Floating Bottom Sport",
          gold: 222,
          silver: 233,
          bronze: 244,
          total: 255
        }
      ],
      rowData: []
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  }

  onBtExport() {
    var params = {
      skipHeader: getBooleanValue("#skipHeader"),
      columnGroups: getBooleanValue("#columnGroups"),
      skipFooters: getBooleanValue("#skipFooters"),
      skipGroups: getBooleanValue("#skipGroups"),
      skipPinnedTop: getBooleanValue("#skipPinnedTop"),
      skipPinnedBottom: getBooleanValue("#skipPinnedBottom"),
      allColumns: getBooleanValue("#allColumns"),
      onlySelected: getBooleanValue("#onlySelected"),
      suppressQuotes: getBooleanValue("#suppressQuotes"),
      fileName: document.querySelector("#fileName").value,
      columnSeparator: document.querySelector("#columnSeparator").value
    };
    if (getBooleanValue("#skipGroupR")) {
      params.shouldRowBeSkipped = function(params) {
        return params.node.data.country.charAt(0) === "R";
      };
    }
    if (getBooleanValue("#useCellCallback")) {
      params.processCellCallback = function(params) {
        if (params.value && params.value.toUpperCase) {
          return params.value.toUpperCase();
        } else {
          return params.value;
        }
      };
    }
    if (getBooleanValue("#useSpecificColumns")) {
      params.columnKeys = ["country", "bronze"];
    }
    if (getBooleanValue("#processHeaders")) {
      params.processHeaderCallback = function(params) {
        return params.column.getColDef().headerName.toUpperCase();
      };
    }
    if (getBooleanValue("#customHeader")) {
      params.customHeader = "[[[ This ia s sample custom header - so meta data maybe?? ]]]\n";
    }
    if (getBooleanValue("#customFooter")) {
      params.customFooter = "[[[ This ia s sample custom footer - maybe a summary line here?? ]]]\n";
    }
    this.gridApi.exportDataAsCsv(params);
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%", paddingTop: "112px", boxSizing: "border-box" }}>
          <div
            id="myGrid"
            style={{
              boxSizing: "border-box",
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              enableFilter={true}
              enableSorting={true}
              showToolPanel={true}
              rowSelection={this.state.rowSelection}
              pinnedTopRowData={this.state.pinnedTopRowData}
              pinnedBottomRowData={this.state.pinnedBottomRowData}
              onGridReady={this.onGridReady.bind(this)}
              rowData={this.state.rowData}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontSize: "13px"
          }}
        >
          <div style={{ paddingBottom: "4px" }}>
            <label>
              File Name:
              <input type="text" id="fileName" />
            </label>
            <label style={{ marginLeft: "20px" }}>
              Separator
              <input type="text" style={{ width: "20px" }} id="columnSeparator" />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <button onClick={this.onBtExport.bind(this)}>Export to CSV</button>
            </label>
          </div>

          <table>
            <tbody>
              <tr>
                <td valign="top">
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="columnGroups" />
                    Column groups
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="useSpecificColumns" />
                    Specify Columns
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="allColumns" />
                    All Columns
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="onlySelected" />
                    Only Selected
                  </label>
                </td>
                <td valign="top">
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="customHeader" />
                    Custom Header
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="customFooter" />
                    Custom Footer
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipHeader" />
                    Skip Header
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipFooters" />
                    Skip Footers
                  </label>
                </td>
                <td valign="top">
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="useCellCallback" />
                    Use Cell Callback
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="suppressQuotes" />
                    Suppress Quotes
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipGroups" />
                    Skip Groups
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipGroupR" />
                    Skip Group R
                  </label>
                </td>
                <td valign="top">
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="processHeaders" />
                    Format Headers
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipPinnedTop" />
                    Skip Pinned Top
                  </label>
                  <br />
                  <label style={{ marginRight: "20px" }}>
                    <input type="checkbox" id="skipPinnedBottom" />
                    Skip Pinned Bottom
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}

render(<GridExample />, document.querySelector("#root"));
