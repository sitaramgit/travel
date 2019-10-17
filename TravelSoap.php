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
  if($_FILES){
// echo json_encode($_FILES, true);
  	$result = $travel->uploadImage($_FILES,$_REQUEST);
echo json_encode($result, true);
}
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

	public function uploadImage($files,$request){
		 

		 $params = Array(Array('id'=>$request['contact_id'],'title'=>$request['name'],'ticketid'=>$request['ticket_id'],'filename'=>$files['document']['name'],'filetype'=>$files['document']['type'],'filesize'=>$files['document']['size'],'filetmp'=>$files['document']['tmp_name']));  
	 move_uploaded_file($files['document']['tmp_name'],'SoapTest/tmp/'.$files['document']['name']);
		return $this->soapCall('add_ticket_attachment',$params);
	}

	//Contacts module Starts here
	public function usercheck($request)
	{	
		$params = Array('user_name'=>$request->email,
						'user_password'=>$request->password,
						'version'=>"7.1.1",
						'login'=>'true');
		return $this->soapCall('authenticate_user',$params);
	}

	public function checksession($request)
	{	
		$params = Array(Array('sessionid'=>$request->sessionId,'id'=>$request->id));
		return $this->soapCall('check_session_id',$params);

	}

	public function updatelist($request)
	{	 
		$module = "HelpDesk";
		$record = $request->tktid;
		$params = Array(Array('ticket_id'=>$record,'module'=>$module));  
		return $this->soapCall('update_list_ticket',$params);
	}

	public function userdetails($request)
	{	 
		$module = "Contacts";
		$record = $request->record;
		$params = Array('id'=>$record,'module'=>$module);
		 
		return $this->soapCall('get_details',$params);
	}

	public function userchange_password($request)
	{	 
		$module = "Contacts";
		$record = $request->record;
		$params = Array(Array('id'=>$record,'username'=>$request->username,'password'=>$request->new_password,'oldpassword'=>$request->old_password));  
		return $this->soapCall('change_password',$params);
	}
 
	public function userupdate($request)
	{	 
		$params = array(Array('id'=>$request->record,
								'firstname'=>$request->firstname,
								'lastname'=>$request->lastname,
								'mobile'=>$request->mobile,
								'homephone'=>$request->homephone,
								'birthday'=>$request->birthday,
								'mailingpobox'=>$request->mailingpobox,
								'mailingcity'=>$request->mailingcity,
								'mailingcountry'=>$request->mailingcountry, 
							));
 
		return $this->soapCall('Update_Contact',$params);
	}

	public function userforgot_passwod($request)
	{	 
		 
		$params = Array( 'email'=>$request->email);  
		return $this->soapCall('send_mail_for_password',$params);
	}

	//Contacts module End here


	//Products module Start here

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
	//Products module End here


	//Quotes module Start here
	public function Quoteslist($request)
	{	
		$contactid = $request->id;
		$block = "Quotes";
		$onlymine = true;
		$params = Array('id'=>$contactid,'onlymine'=>true);	
		return $this->soapCall('get_quotes',$params);
	}
	public function Invoiceslist($request)
	{	
		$contactid = $request->id;
		$block = "Inovice";
		$onlymine = true;
		$params = Array('id'=>$contactid,'onlymine'=>true);	
		return $this->soapCall('get_invoices',$params);
	}

	public function Invoicesdetail($request)
	{	 
		$module = "Invoice";
		$record = $request->record;
		$params = Array('id'=>$record,'module'=>$module);
		return $this->soapCall('get_details',$params);
	}
 

	public function Quotesdetail($request)
	{	 
		$module = "Quotes";
		$record = $request->record;
		$params = Array('id'=>$record,'module'=>$module);
		 
		return $this->soapCall('get_details',$params);
	}


	public function Quotescreate($request)
	{	 

		$quotestage = 'Created'; 
		$contactid = $request->contact;
		$productid = $request->record;
		$qty = $request->qty; 
		$quote_id= '';
		$productlist = $request->products;
		if(count($productlist) >= 1){
			foreach($productlist as $k=>$proid){
				$products['productid'][]=$proid;
				$products['product_qty'][]=$qty;  
			}
		}else{
			$products['productid'][0]=$productid;
			$products['product_qty'][0]=$qty; 
		}		
		$params = Array(Array('contactid'=>$contactid,'quote_id'=>$quote_id,'productsinfo'=>$products,'quotestage'=>$quotestage)); 
		return $this->soapCall('add_travelquote_record',$params);
	}
	//Quotes module End here


	


	//Tickets module Start here

	public function ticketdetail($request)
	{	 
		$module = "HelpDesk";
		$record = $request->record;
		$params = Array('id'=>$record,'module'=>$module);
		 
		return $this->soapCall('get_details',$params);
	}
 
	public function ticketlist($request)
	{	  
		$record = $request->id;
		$params = Array(Array('id'=>$record,'onlymine'=>true));
		 
		return $this->soapCall('get_tickets_list',$params);
	}

	public function ticketcomments($request)
	{	  
		$record = $request->tktid;
		$params = Array(Array('ticketid'=>$record));
		 
		return $this->soapCall('get_ticket_comments',$params);
	}

	public function ticketcommentscreate($request)
	{	  
		 
		$params = Array(Array('ownerid'=>$request->id,'ticketid'=>$request->tktid,'comments'=>$request->comments));
		 
		return $this->soapCall('create_ticket_comment',$params);
	}

	public function ticketchangestatus($request)
	{	  
		 
		$params = Array(Array('ticketid'=>$request->tktid));
		 
		return $this->soapCall('change_ticket_status',$params);
	}

	public function ticketcreate($request)
	{	  
		$params = Array(Array(
				'parent_id'=>$request->contactid,
				'id'=>$request->record,
				'title'=>$request->title,
				'description'=>$request->description,
				'priority'=>$request->priority,
				'severity'=>$request->severity,
				'category'=>$request->category,
				'product_id'=>$request->product_name,
				'module'=>"HelpDesk"
				)); 
		 
		return $this->soapCall('create_ticket',$params);
	}
 	//Tickets module End here

 	//Documents module Starts here

	public function documentslist($request)
	{	   
		$params = Array(Array('ticket_id'=>$request->tktid,'contact_id'=>$request->contactid));
		 
		return $this->soapCall('documents_ticket_list',$params);
	}

	public function documentsupload($request)
	{	   
		
		 
		return 'sitaram kudiredd';
	}

 	//Documents module End here
 
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

