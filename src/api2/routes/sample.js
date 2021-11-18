const express = require("express");
const router = express.Router();
const passport = require("passport");
const { passportCreate } = require("../mods/passport");
const { query } = require("../mods/dbconnection");

//========================================================================================//
var tb_name = "tb_study";
var key_id = "sid";
var listField = "*";
var detailField = "*";
var updateField =
  "alarm,day,money,salary,salaryUnit,student,timecode,tutor,available";
var insertField = "alarm,day,money,salary,salaryUnit,student,timecode,tutor";
//========================================================================================//

/**
 * @api {post} /sample sample 추가하기
 * @apiGroup Sample
 *
 * @apiParam {String} param1 파라미터
 *
 * @apiSuccess {String} result 결과
 */
router.post("/", async (req, res) => {
  var params = {};

  var insertFieldArr = insertField.split(",");

  for (var idx in insertFieldArr) {
    var key = insertFieldArr[idx];
    params[key] = req.body[key];
  }

  var id = await query(`INSERT INTO ${tb_name} SET ?, reg_date=now()`, params);

  console.log(id);

  res.json({});
});

/**
 * @api {put} /sample/:param_id sample 수정
 * @apiGroup Sample
 *
 * @apiParam {String} param1 파라미터
 *
 * @apiSuccess {String} result 결과
 */
router.put("/:param_id", async (req, res) => {
  var param_id = req.params.param_id;
  var params = {};

  var updateFieldArr = updateField.split(",");

  for (var idx in updateFieldArr) {
    var key = updateFieldArr[idx];
    if (req.body[key]) params[key] = req.body[key];
  }

  await query(`UPDATE ${tb_name} SET ? WHERE ${key_id}=?`, [params, param_id]);

  res.json({});
});

/**
 * @api {delete} /sample/:param_id 스터디 삭제
 * @apiGroup Sample
 *
 * @apiParam {String} param_id ID
 *
 * @apiSuccess {String} result 결과
 */
router.delete("/:param_id", async (req, res) => {
  var param_id = req.params.param_id;

  await query(`DELETE FROM ${tb_name} WHERE ${key_id}=?`, [param_id]);

  res.json({});
});

/**
 * @api {get} /sample 리스트
 * @apiGroup Sample
 *
 *
 * @apiSuccess {String} result 결과
 */
router.get("/", async (req, res) => {
  var list = await query(`SELECT ${listField} FROM ${tb_name} `);

  res.json({ list });
});

/**
 * @api {get} /sample/:param_id 상세 정보
 * @apiGroup Sample
 *
 * @apiParam {String} param_id 식별자
 *
 * @apiSuccess {String} result 결과
 */
router.get("/:param_id", async (req, res) => {
  var param_id = req.params.param_id;

  var list = await query(
    `SELECT ${detailField} FROM ${tb_name} WHERE ${key_id} = ?`,
    [param_id]
  );

  if (list.length == 1) {
    res.json(list[0]);
  } else {
    res.json({});
  }
});
module.exports = router;
