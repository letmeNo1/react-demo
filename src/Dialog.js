import React from "react";
import { Modal, Button, Input } from "antd";
import "antd/dist/antd.css";

class DialogCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleOk = () => {
    this.props.onOk(this.state.text);
    this.props.onClose();
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { visible, onClose } = this.props;

    return (
      <Modal
        title="设置文案"
        visible={visible}
        onOk={this.handleOk}
        onCancel={onClose}
      >
      </Modal>
    );
  }
}

export default DialogCustom

// 使用
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: ""
    };
  }

  handleOk = v => {
    this.setState({ text: v });
  };

  showDialog = () => {
    this.setState({ visible: true });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showDialog}>设置文案</Button>
        <DialogCustom
          visible={this.state.visible}
          onOk={this.handleOk}
          onClose={this.handleClose}
        />
        <div>{this.state.text}</div>
      </div>
    );
  }
}

