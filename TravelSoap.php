<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 


$raw_post = file_get_contents('php://input');
$request = json_decode($raw_post);

 
$proxy_host = ''; //Host Name of the Proxy
$proxy_port = ''; //Port Number of the Proxy
$proxy_username = ''; //User Name of the Proxy
$proxy_password = ''; //Password of the Proxy
//The character set to be used as character encoding for all soap requests
$default_charset = 'UTF-8';//
include("SoapTest/soap.php");


 $funName =  $request->module.$request->view;
 $travel = new TravelCrm($client,$Server_Path);
 $result = $travel->$funName($request);

echo json_encode($result, true);



 
class TravelCrm 
{
	public $client;
	public $Server_Path;
	function __construct($cli,$path)
	{
		$this->client = $cli;
		$this->Server_Path = $path;
	}

	public function usercheck($request)
	{	
		$params = Array('user_name'=>$request->email,
						'user_password'=>$request->password,
						'version'=>"7.1.1",
						'login'=>'false');
		return $this->soapCall('authenticate_user',$params);
	}


	public function productslist($request)
	{	
		$block = "Products";
		$onlymine = true;
		$params = Array('id'=>'','block'=>$block,'onlymine'=>false);	
		return $this->soapCall('get_product_list_values',$params);
	}

	public function productsdetail($request)
	{	
		$module = "Products";
		 
		$record = $request->record; 
		$params = Array('id'=>$record,'module'=>$module); 
		return $this->soapCall('get_details',$params);
	}



	public function Quoteslist($request)
	{	
		$contactid = $request->id;
		$block = "Quotes";
		$onlymine = true;
		$params = Array('id'=>$contactid,'onlymine'=>true);	
		return $this->soapCall('get_quotes',$params);
	}

	public function Quotesdetail($request)
	{	 
		$module = "Quotes";
		$record = $request->record;
		$params = Array('id'=>$record,'module'=>$module);
		 
		return $this->soapCall('get_details',$params);
	}
 
 
	public function soapCall($method,$params)
	{
		$status = $this->client->call($method, $params, $this->Server_Path, $this->Server_Path);
		if($this->client->getError()){
			return $this->client->getError();
		} else {
			return $status;
		}
	}

}

