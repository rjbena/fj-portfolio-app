import { authorizeUser, withAuth } from "../../utils/auth0";

const Secretssr = ({ user, title }) => {
  return (
    <div>
      <h1>SSR Secret {user.name}</h1>
      <h3>{title}</h3>
    </div>
  );
};

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizeUser(req, res);
//   return {
//     props: {
//       user,
//     },
//   };
// };

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "New title" });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle();
  return title;
})();

export default Secretssr;
