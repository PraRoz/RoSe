import { Skeleton } from "antd";

export const SliderLoading = () => {
  return (
    <div className="flex justify-center  items-center gap-10 mb-20 ">
      {["1", "2", "3", "4"].map((item) => {
        return (
          <div
            className="flex justify-center flex-col items-center mb-20 mx-5"
            key={item}
          >
            <Skeleton.Image
              active
              style={{ width: "250px", height: "250px" }}
            />
            <Skeleton
              active
              paragraph={{ rows: 5 }}
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const ParagraphWithImageLoading = () => {
  return (
    <div className="flex justify-center items-center">
      <Skeleton.Image style={{ width: "500px", height: "500px" }} />
      <Skeleton active paragraph={{ rows: 15 }} className="px-10 py-28 w-1/2" />
    </div>
  );
};

export const CardLoading = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-20 mx-5">
      <Skeleton.Image active style={{ width: "250px", height: "250px" }} />
      <Skeleton
        active
        paragraph={{ rows: 5 }}
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
};
