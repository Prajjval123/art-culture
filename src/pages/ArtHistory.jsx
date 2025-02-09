import React from "react";

const ArtHistory = () => {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 py-8 text-gray-800 text-justify">
      {/* History Of Sculpture */}
      <section className="mb-10">
        <h1 className="text-3xl font-semibold my-8 text-left">
          History Of Sculpture
        </h1>
        <p className="mb-4">
          Sculpture has been a means of human expression since prehistoric
          times. The ancient cultures of Egypt and Mesopotamia produced an
          enormous number of sculptural masterworks, frequently monolithic, that
          had ritual significance beyond aesthetic considerations.
        </p>
        <p className="mb-4">
          The freestanding and relief sculpture of the ancient Greeks developed
          from the rigidity of archaic forms. It became, during the classical
          and Hellenistic eras, the representation of the intellectual
          idealization of its principal subject, the human form. The concept was
          so magnificently realized by means of naturalistic handling as to
          become the inspiration for centuries of European art. Roman sculpture
          borrowed and copied wholesale from the Greek in style and techniques,
          but it made an important original contribution in its extensive art of
          portraiture.
        </p>
        <p className="mb-4">
          In Europe the great religious architectural sculptures of the
          Romanesque and Gothic periods form integral parts of the church
          buildings, and often a single cathedral incorporates thousands of
          figural and narrative carvings.
        </p>
        <p className="mb-4">
          US-INDIA is an organization, providing an ideal platform for nurturing
          and encouraging upcoming talents (particularly those, who are gifted
          but lacking availability of adequate resource) in innovative and truly
          intriguing artistic and cultural ventures.
        </p>
        <p className="mb-4">
          Facilitating exchange of innovative artistic & cultural creations and
          creators within the well appreciative andiences in the socities of the
          United States, the oldest democracy and India, the largest democracy.
        </p>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Modern Sculpture</span>
          <p className="">
            The 18th cent. modified the dramatic and grandiose style of the
            baroque to produce the more intimate art of Clodion and Houdon, and
            it also saw the birth of neoclassicism in the work of Canova. This
            derivative style flourished well into the 19th cent. in the work of
            Thorvaldsen and his followers, but concurrent with the
            neoclassicists, and then superseding them, came a long and
            distinguished line of French realist sculptors from Rude to Rodin...
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Sculpture#History_of_sculpture"
              className="text-blue-500"
            >
              {" "}
              view more
            </a>
          </p>
        </div>
      </section>

      {/* Sculpture in the Ancient World */}
      <section className="mb-10 ">
        <h2 className="text-3xl font-semibold mb-6">
          Sculpture in the Ancient World
        </h2>
        <div className="flex flex-col gap-1 mb-4">
          <span className="font-semibold">Greek sculpture</span>
          <p className="">
            Greek Art as a whole is believed to be a mixture of Egyptian,
            Syrian, Minoan (Crete), Mycenean and Persian cultures - which
            (judging by language) are themselves derived from Indo-European
            tribes migrating from the open steppes north of the Black Sea. Greek
            sculptors learned both stone carving and bronze-casting from the
            Egyptians and Syrians, while the traditions ofsculpture within
            Greece were developed by the two main groups of settlers from
            Thessaly - the Ionians and Dorians.
          </p>
          <p className="">
            The most popular sculptural materials used in Ancient Greece
            included: marble and other calcareous rock, bronze, terracotta and
            wood. It is worth noting that about half of all statues created
            during antiquity were made of bronze, despite the fact that the
            metal was only used widely in sculpture from about 550-500 onwards.
            Whatever material was used, the final surface of the statue was made
            to look more life-like by being coated with oil and hot wax, before
            being coloured and gilded. Even relief sculpture was not considered
            finished until polished and coloured.
          </p>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <span className="font-semibold">Roman art</span>
          <p className="">
            Roman sculpture learned from the Greeks and the Etruscans, reached a
            peak in the first and second centuries AD. It was, however, the
            development of the arch, the vault, and the dome, and the use of
            concrete, which gave distinction, serviceability, and grandeur to
            Roman domestic and public architecture and civil engineering.
          </p>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <span className="font-semibold">Egyptian Sculpture</span>
          <p className="">
            Egyptian Sculpture of predynastic Egypt (c.4000-3200 B.C.), known
            from funerary offerings, consisted largely of painted pottery and
            figurines, ivory carvings, slate cosmetic palettes, and finely
            worked flint weapons. In painting, a monumental treatment was given
            to designs like those drawn in red on buff-colored pottery from Â
            Hierakonpolis, a palace city of upper Egypt. Toward the end of the
            predynastic period, sculptors began to carve monolithic figures of
            the gods from limestone, such as the Min at Coptos. In the
            protodynastic and early dynastic periods (3200-2780 B.C.) some
            Mesopotamian motifs began to appear. The craftsmanship of the finely
            worked stone bowls and vases of these periods is particularly
            remarkable...
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Statue"
              className="text-blue-500"
            >
              {" "}
              view more
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArtHistory;
