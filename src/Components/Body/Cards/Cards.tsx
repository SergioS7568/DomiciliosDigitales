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
      <div className="flex flex-col bg-gray-100 pt-2 pb-2 pr-6 pl-6 rounded-2xl">
        <p className="text-start font-bold text-blackOption-0">
          {ApiUser.lastname}
        </p>
        <p className="text-start text-blackOption-0">{ApiUser.name}</p>
        <div
          className=" bg-gradient-to-r from-gray-400 to-gray-300"
          style={{ height: "1px" }}
        ></div>
        <p className="text-end text-blackOption-0">{ApiUser.profile.name}</p>
      </div>
    </div>
  );
};
export default Cards;
