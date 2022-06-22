'use strict';

class MnistButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  mnistDetect() {
  }

  render() {
 }
}

class Lesson2Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <canvas
          width={200}
          height={200}
          style={{
            position: "relative",
            left: 100,
            top: 100,
            border: "1px solid #c3c3c3"
          }}
        >
          Your browser does not support the canvas element.
        </canvas>
      </div>
      );      
 }
}

class Lesson2 extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
        result:""
    };

    this.handleCommitChange = this.handleCommitChange.bind(this);
  }

  handleCommitChange(event) {
    event.preventDefault();
  }


  render() {
    return (
        <div>
            Lesson 2: pytorch mnist 手写数字识别
            <hr/>
            <form action = "https://pdumhe-ahmwgf-5000.app.myide.io/lesson2/mnist_predict" method = "POST" 
                enctype = "multipart/form-data">
                <input type = "file" name = "file" />
                <input type = "submit"/>
            </form>   
        </div>

      );      
 }
}
