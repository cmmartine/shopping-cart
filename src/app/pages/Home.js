import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Company Name</h1>
      <div className='company-description'>
        <h2>
          About us
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit quam ac condimentum tristique. Curabitur posuere risus quis dui consequat, vitae eleifend neque feugiat. Fusce consequat mollis efficitur. Nullam ultricies maximus ipsum quis aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean id pulvinar ante. Aliquam feugiat id mauris sit amet pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ornare neque ut cursus aliquam. Suspendisse potenti. Donec quam purus, fermentum et nunc eu, vulputate mattis orci. Integer a orci quis lectus suscipit aliquet. Mauris cursus fermentum risus, sit amet porta metus pretium venenatis. Quisque quis consequat nunc.
        </p>
        <p>
          Duis posuere risus lorem, fermentum finibus massa convallis sit amet. Sed dictum justo ut ullamcorper posuere. Integer consequat ex quis urna vestibulum, nec tincidunt turpis ultricies. Suspendisse vel eros fringilla, pretium magna et, aliquam orci. Curabitur tristique vel turpis id molestie. Suspendisse quis mauris enim. Integer tempus pulvinar arcu congue tempus. Proin laoreet nulla in rhoncus viverra. Nulla et turpis ut magna laoreet auctor nec eu elit. Quisque ultricies consectetur purus ut interdum.
        </p>
      </div>
    </div>
  );
}

export default Home;