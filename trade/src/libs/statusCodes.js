
const statusCodes = {
	'en': {

	},
	'cn': {
		'CommonCodes_Service_Wrong': '服务器忙，请稍后再试',
		'CommonCodes_Params_Check_Fail': '参数校验失败',
		'CommonCodes_Request_Method_Wrong': '请求方式错误！',
		'CommonCodes_Token_Fail': 'Token失效',
		'CommonCodes_No_Access': '没有权限',
		'LoginCodes_Email_Exist': '你的邮件已经注册了！',
	  'LoginCodes_Login_DataWrong': '账号密码输入错误',
	  'LoginCodes_Login_Succ': '登陆成功',
	  'LoginCodes_Login_No_Account': '请先注册',
	  'LoginCodes_Login_IllegalData': '账号密码输入错误',
	  'LoginCodes_Register_Failed': '注册失败，请稍后再试',
	  'LoginCodes_Register_Succ': '注册成功',
	  'LoginCodes_Params_Check_Fail': '参数校验失败',
	  'LoginCodes_Mail_Send_Succ': '邮件发送成功！',
	  'LoginCodes_Mail_Send_Error': '邮件发送失败,请稍后再试',
	  'LoginCodes_User_Not_Bind_Email': '用户未绑定邮箱',
	  'LoginCodes_Query_Email_Succ': '查询用户邮箱成功！',
	  'LoginCodes_Code_Error': '验证码错误！',
	  'LoginCodes_Code_Correct': '验证码正确！',
	  'LoginCodes_Reset_Pass_Succ': '重置密码成功！',
	  'LoginCodes_Token_Fail': 'Token失效',
	  'LoginCodes_Get_User_Info': '获取用户信息成功！',
	  'LoginCodes_Change_Login_Pwd_Succ': '更改登陆密码成功！',
	  'LoginCodes_Change_Trade_Pwd_Succ': '更改交易密码成功',
	  'LoginCodes_Change_Login_Pwd_Fail': '更改登陆密码失败，请稍后再试！',
	  'LoginCodes_Change_Trade_Pwd_Fail': '更改交易密码失败，请稍后再试！',
	  'LoginCodes_Assets_Data_Normal': '资产数据返回正常！',
	  'LoginCodes_Assets_Data_Null': '资产数据返回错误！',
	  'LoginCodes_Trade_Pwd_Wrong': '交易密码不正确！',
	  'LoginCodes_Get_User_Bamboo': '获取用户参与挖矿得到的bamboo数量成功！',
	  'LoginCodes_Get_Combo_Data_Fail': '获取coinhive数据失败！',
	  'AssetsCodes_Assets_Data_Normal': '资产数据返回正常！',
		'AssetsCodes_Assets_Data_Null': '资产数据返回错误！',
		'AssetsCodes_Assets_Null': '资产价值为空',
		'PandaOwnerCodes_Query_Panda_Info_Normal': '查询熊猫信息成功！',
		'PandaOwnerCodes_Already_Gene_Free_Panda': '已经生成过一只G10的熊猫',
		'PandaOwnerCodes_Gene_Free_Panda_Succ': '生成G10熊猫成功',
		'PandaOwnerCodes_Query_Panda_By_Addr': '查询地址下所有熊猫成功！',
		'PandaOwnerCodes_Query_Panda_In_Sold': '查询所有在售是熊猫！',
		'PandaOwnerCodes_Not_Out_Panda': '该用户没有外出的熊猫',
		'LandProductCodes_Get_Star_Point_Succ': '得到商品产生中心成功！',
		'LandProductCodes_Get_Star_Point_Fail': '商品中心获取失败',
		'LandProductCodes_Get_Prepare_Product_Fail': '获取投票中的商品失败！',
		'LandProductCodes_Get_Prepare_Product_Succ': '获取投票中的商品成功！',
		'LandProductCodes_Sell_Product_Fail': '出售商品失败！',
		'LandProductCodes_Drop_Product_Fail': '下架商品失败',
		'LandProductCodes_Del_Product_Fail': '删除商品失败!',
		'LandProductCodes_User_No_Such_Product': '用户未集齐当前商品碎片！',
		'LandProductCodes_Query_Product_Fail': '查询用户指定商品失败！',
		'LandProductCodes_Insert_Product_Fail': '插入用户商品失败',
		'LandProductCodes_Update_Product_Fail': '更新用户商品失败',
		'LandProductCodes_User_Product_Null': '用户的商品为空！',
		'LandProductCodes_User_Product_Not_Null': '用户的商品不为空！',
		'LandProductCodes_Vote_Product_Succ': '商品投票成功！',
		'LandProductCodes_Vote_Product_Fail': '商品投票失败！',
		'LandProductCodes_Get_Current_Product_Succ': '获取当前商品成功！',
		'LandProductCodes_Get_Current_Product_Fail':'获取当前商品失败！',
		'LandProductCodes_Update_User_Bamboo_Succ': '更新用户的竹子数量成功！',
		'LandProductCodes_Exchange_Product_Succ': '商品兑换成功！',
		'PandaLandCodes_No_Such_Panda': '没有这只熊猫',
		'PandaLandCodes_No_More_Bamboo_For_Out': '没有足够的竹子！',
		'PandaLandCodes_No_Product_In_Land': '没有物品在搜索范围内！',
		'PandaLandCodes_Update_Panda_Attr_Fail': '更新用户属性失败！',
		'PandaLandCodes_Update_Land_Assets_Fail': '更新用户资产失败',
		'PandaLandCodes_Back_Assets_Carry_Fail': '带回来的商品失败！',
		'PandaLandCodes_Delete_Back_Assets_Fail': '删除回归商品失败！',
		'PandaLandCodes_Panda_Out_Succ': '熊猫外出搜索成功！',
		'PandaLandCodes_Panda_Not_Sold': '熊猫并非出售',
		'PandaLandCodes_Sell_Panda_Succ': '出售熊猫成功！',
		'PandaLandCodes_Unsell_Panda_Succ': '取消出售熊猫成功！',
		'PandaLandCodes_Only_One_Unsold_Panda': '只有一只没出售的熊猫',
		'PandaLandCodes_Buy_Panda_Fail': '购买熊猫失败',
		'PandaLandCodes_Buy_Panda_Succ': '购买熊猫成功',
		'PandaLandCodes_Back_Assets_Carry_Succ': '熊猫带回商品成功!',
		'PandaLandCodes_Drop_Panda_Fail': '熊猫丢弃失败!',
		'PandaLandCodes_Panda_Sire_Succ': '熊猫孵化成功',
		'JoiCodes_Addr_Illegal': '地址格式不正确',
		'JoiCodes_Gen_Illegal': '基因格式不正确',
		'JoiCodes_Attr_Illegal': '属性格式不正确',
		'JoiCodes_Price_Illegal': '价格格式不正确',
		'JoiCodes_Email_Illegal': '邮件格式不正确',
		'JoiCodes_Pwd_Illegal': '密码格式不正确',
		'JoiCodes_State_Illegal': '状态格式不正确',
		'JoiCodes_Titude_Illegal': '经纬度格式不正确',
		'JoiCodes_ProductAttr_Illegal': '商品属性格式不正确',
		'JoiCodes_Dir_Illegal': '方向格式不正确',
		'JoiCodes_ProductId_Illegal': '商品id格式不正确',
		'JoiCodes_Phone_Illegal': '电话格式不正确'
	}
}

module.exports = {
	statusCodes: statusCodes
}