import React, { Component } from 'react'
import "./About.css";
import Title from "../Title/Title";
export default class About extends Component {
  render() {
    return (
      <div className="ContainerA">
        <Title name="チーム 5 "/>
          <table className="tableA">
              <tr>
                  <th>名前</th>
                  <th>学籍番号</th>
              </tr>
              <tr>
                  <td>ラ・ヴー・ホアン</td>
                  <td>20166138</td>
              </tr>
              <tr>
                  <td>ファン・クォック・トアン</td>
                  <td>20167403</td>
              </tr>
              <tr>
                  <td>グエン・ホン・ニュン</td>
                  <td>20166553</td>
              </tr>
              <tr>
                  <td>グエン・フー・トゥアン</td>
                  <td>20166925</td>
              </tr>
              <tr>
                  <td>グエン・フォン・アイン</td>
                  <td>20165740</td>
              </tr>
              <br></br>
              <br></br>
              <tr>Link github: https://github.com/nhungnguyenhong/store-aroma</tr>
          </table>

      </div>
    )
  }
}
