import React, { Component } from 'react';
// import { CheckBox } from './Checkbox';
import data from './data.json';
import UseEffect1 from './components/ReactHooks/UseEffects/UseEffect1';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: data,
    };
  }

  render() {
    // let { palette } = this.state;

    // const handleAllChecked = (event) => {
    //   palette.map((item) => {
    //     return (item.isChecked = event.target.checked);
    //   });
    //   this.setState({ palette: palette });
    //   console.log(
    //     palette.map((e) => e['color']) +
    //       '\n so 1 \n' +
    //       palette
    //         .map((e) => e['color'])
    //         .map((e, i, final) => final.indexOf(e) === i && i) +
    //       '\n so 2 \n' +
    //       palette
    //         .map((e) => e['color'])
    //         .map((e, i, final) => final.indexOf(e) === i && i)
    //         .filter((e) => palette[e]) +
    //       '\n so 3 \n' +
    //       JSON.stringify(
    //         palette
    //           .map((e) => e['color'])
    //           .map((e, i, final) => final.indexOf(e) === i && i)
    //           .filter((e) => palette[e])
    //           .map((e) => palette[e])
    //       )
    //   );
    // };

    // const handleCheck = (event) => {
    //   palette
    //     .filter((item) => item.color === event.target.value)
    //     .map((item) => {
    //       return (item.isChecked = event.target.checked);
    //     });
    //   this.setState({ palette: palette });
    // };

    // const optionFilter = palette
    //   .map((e) => e['color'])
    //   // store the keys of the unique objects
    //   .map((e, i, final) => final.indexOf(e) === i && i)
    //   // eliminate the dead keys & store unique objects
    //   .filter((e) => palette[e])
    //   .map((e) => palette[e]);

    return (
      <div className="App" style={{ padding: '100px' }}>
        {/* <h1> Check & Uncheck CLASS </h1>
        <div>
          <input
            type="checkbox"
            onChange={handleAllChecked}
            value="checkedall"
          />
          Check / Uncheck All
          <hr />
          {optionFilter.map((item, index) => {
            return <CheckBox key={index} handleCheck={handleCheck} {...item} />;
          })}
        </div>

        <hr />
        {palette
          .filter((item) => item.isChecked)
          .map((item, index) => {
            return (
              <div key={index}>
                <strong>{item.color}</strong>
              </div>
            );
          })} */}
        <UseEffect1></UseEffect1>
      </div>
    );
  }
}
