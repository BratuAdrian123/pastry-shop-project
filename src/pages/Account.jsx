function Account() {
  return (
    <div className="text-center">
      <h1 className="m-5 text-4xl">Hello Acc-name</h1>
      <div className="ml-auto mr-auto w-[80%] account-details-container mb-5">
        <h2 className="mb-4 text-2xl">Account Details</h2>
        <div className="mb-3 pl-3 account-details-info account-details-username  flex justify-start items-center">
          <p>Username:</p>
          <p className="account-details-user-info">Acc-User</p>
        </div>
        <div className="mb-3 pl-3 account-details-info account-details-email flex justify-start items-center">
          <p>Email:</p>
          <p className="account-details-user-info">Acc-Email -can be changed</p>
        </div>
        <div className="mb-3 pl-3 account-details-info account-details-password flex justify-start items-center ">
          <p>Password:</p>
          <p className="account-details-user-info">Acc-pass</p>
        </div>
        <div className="mb-3 pl-3 account-details-info account-details-address flex justify-start items-center">
          <p>Delivery Address:</p>
          <p className="account-details-user-info">Address -can be changed</p>
        </div>
      </div>
      <div className="ml-auto mr-auto w-[80%] account-details-container mb-5">
        <h2 className="mb-4 text-2xl">Active Deliverys</h2>
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex delivery-stats ml-auto mr-auto">
            <div className="p-3">
              <p>Produse Cart + Pret</p>
            </div>
            <div className="p-3">
              <p>Preparing status</p>
              <p>Done</p>
            </div>
            <div className="p-3">
              <p>Delivery status</p>
              <p>Ongoing</p>
            </div>
            <div className="p-3">
              <p>Delivered status</p>
              <p>Waiting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto mr-auto w-[80%] account-details-container mb-5">
        <h2 className="mb-4 text-2xl">History</h2>
        <div className="flex justify-between mb-8 history-content mr-10 ml-10">
          <p className="ml-auto mr-auto">Produse Cart + Pret</p>
          <p className="ml-auto mr-auto">Delivered Status: Delivered/Ongoing</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
