const Location = () => {
  return (
    <section className="flex h-64">
      <div className="w-1/2 p-6">
        <h3 className="text-4xl">Localização</h3>
        <address>
          <span>
            Rua Dal Canale, 2217, 1 Andar, esquina com a Rua Marechal Floriano
          </span>
          <br />
          <span>Caxias do Sul, RS, Brasil - 95020-371</span>
        </address>
        <a
          href="https://www.google.com/maps/dir//C%C3%A9saros+Buffet/data=!4m8!4m7!1m0!1m5!1m1!1s0x951ebcd4f291544d:0xab3ae1411dc56892!2m2!1d-51.1838246!2d-29.171398"
          target="_blank"
        >
          Como chegar
        </a>
      </div>
      <div className="w-1/2 ">
        <iframe
          src="https://www.google.com/maps/embed?key=AIzaSyDIQ082VlmvFYd72tNR4uWXzcAO7w3ZuVw&pb=!1m18!1m12!1m3!1d3483.7717394508973!2d-51.186013284812226!3d-29.17139798220832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ebcd4f291544d%3A0xab3ae1411dc56892!2sC%C3%A9saros%20Buffet!5e0!3m2!1sen!2sus!4v1601100899069!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
