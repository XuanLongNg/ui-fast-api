import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import StyledPost from "./style";
import axios from "axios";
const urlBase = "https://stormx.vercel.app/";

const PostForm = () => {
  const color_white = {
    color: "white",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [longUrl, setLongUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState(false);
  const [url, setUrl] = useState(undefined);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = () => {
    setIsLoading(true);
    let url = `${urlBase}shorten?long_url=${longUrl}&short_name=${shortUrl}`;
    console.log(url);
    axios
      .post(
        url,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUrl(response.data.short_url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    notification.success({
      message: "Sao chép thành công",
    });
    setUrl(undefined);
  };
  const layout = (
    <StyledPost>
      <div className="container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="Form"
        >
          <Form.Item
            label={<span style={color_white}>Long-url</span>}
            name="long-url"
            required={false} // set required to false to hide the asterisk
            colon={false}
            rules={[{ required: true, message: "Please input your Long-url!" }]}
            className="input-item"
          >
            <Input onChange={(v) => setLongUrl(v.target.value)} />
          </Form.Item>

          <Form.Item
            label={<span style={color_white}>Short-url</span>}
            name="short-url"
            required={false} // set required to false to hide the asterisk
            colon={false}
            rules={[
              { required: true, message: "Please input your Short-url!" },
            ]}
            className="input-item"
          >
            <Input onChange={(v) => setShortUrl(v.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="btn"
            >
              Transfer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StyledPost>
  );
  const resolved = (
    <StyledPost>
      <div className="container">
        <div className="result">
          <Input className="input-result" disabled value={url} />
          <Button className="btn" onClick={handleCopy}>
            {" "}
            Sao chép
          </Button>
        </div>
      </div>
    </StyledPost>
  );
  return !url ? layout : resolved;
  //   return resolved;
};

export default PostForm;
