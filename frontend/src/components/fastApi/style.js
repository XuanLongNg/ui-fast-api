import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  // background-image: linear-gradient(135deg, #e8d5f2, #aee1f9);
  background-color: rgb(0, 4, 15);
  .container {
    width: 50%;
    min-width: 30em;
    background-color: #38374081;
    border-radius: 5px;
    .Form {
      padding: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .input-item {
        align-content: center;
        width: 100%;
      }
      // .ant-form-item-explain-error {
      //   color: #faad14;
      // }
      .btn {
        background-color: #a2edf1;
        color: #000000cb;
        font-weight: 500;
      }
    }
    .result {
      padding: 3em;
      .input-result {
        background-color: white;
        color: black;
        margin: 1em 0;
      }
      .btn {
        background-color: #a2edf1;
        color: #000000cb;
        font-weight: 500;
      }
    }
  }
`;
export default StyledPost;
