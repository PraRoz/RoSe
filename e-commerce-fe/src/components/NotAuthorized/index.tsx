import { Button } from "antd";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-[500px] h-[300px] bg-[#e4daf2] flex flex-col gap-4 justify-center items-center">
        Please Log in To Continue...
        <Link to={"/login"}>
          <Button
            type="primary"
            size="large"
            className="!bg-secondary !border-secondary  text-light hover:!text-secondary hover:!bg-light"
        
          >
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
