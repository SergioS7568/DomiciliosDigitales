interface Props {
  ApiUser: {
    id: number;
    name: string;
    lastname: string;
    profile: {
      id: number;
      name: string;
    };
  };
}

const Cards = (props: Props) => {
  const { ApiUser } = props;
  return (
    <div className=" gap-3 m-2">
      <div className="flex flex-col bg-gray-100 dark:bg-darkGrayOption-0 pt-3 pb-3 pr-6 pl-6 gap-1 rounded-2xl text-lg">
        <p className="text-start font-bold ">{ApiUser.lastname},</p>
        <p className="text-start  font-normal pb-2">{ApiUser.name}</p>
        <div
          className=" bg-gradient-to-r from-gray-400 to-gray-300 "
          style={{ height: "1px" }}
        ></div>
        <p className="text-end  font-normal pt-2">{ApiUser.profile.name}</p>
      </div>
    </div>
  );
};
export default Cards;
