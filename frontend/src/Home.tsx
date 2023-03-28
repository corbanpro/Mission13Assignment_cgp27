function Home() {
  return (
    <>
      <div>
        <br />
        <h4 className="inline">Introducing...&nbsp;</h4>
        <h1 className="inline">Joel Hilton!!!</h1>
        <br />
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="JoelHiltonHeadshot.jpg"
                      alt="Joel Hilton"
                      width={500}
                    />
                  </div>
                  <div className="col-6">
                    <p>This website is all about Joel!</p>
                    <p>
                      He's got a podcast, and there's a random spreadsheet about
                      movies that he put together too, so go check it out!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
