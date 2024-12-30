"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        Courses and Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 This is the super cool description of this project. <br></br>
//               </span>{" "}
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit, similique, doloremque iure maxime dignissimos debitis commodi libero voluptatem amet molestiae a corrupti vel pariatur voluptatibus quas quasi dolorum magni!
//             </p>
//             <Image
//               src="/apple-vision-pro.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
const PrivacyPilot = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <Link href="https://github.com/AlexT101/privacy-pilot" className="font-bold text-neutral-700 dark:text-neutral-200">
                Privacy Pilot <br></br>
              </Link>{" "}
              An intelligent browser extension that analyzes Terms & Conditions in real-time, protecting your digital rights through comprehensive risk assessment.
            </p>
            <Image
              src="/PrivacyPilotSS.png"
              alt="PivacyPilotPic"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const GTXRWebsite = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                GTXR Marketing Website <br></br>
              </span>{" "}
              Official portfolio website for GTXR (Georgia Tech Extended Reality), the prime XR club at Georgia Tech
            </p>
            <a href='https://www.gtxr.club'>Visit</a>
          </div>
        );
      })}
    </>
  );
};

const ImmerseGTPlatform = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                ImmerseGT Platform <br></br>
              </span>{" "}
              Online event platform for the 2025 ImmerseGT Hackathon @ Georgia Tech
            </p>
          </div>
        );
      })}
    </>
  );
};

const KunstenAR = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                KunstenAR <br></br>
              </span>{" "}
              KunstenAR is an app built in Xcode using Swift which turns hand-drawn 2D models into 3D models and turns into a personality-adapting chatbot.
            </p>
          </div>
        );
      })}
    </>
  );
};

const XRtisticHabitatContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                XRtistic Habitat <br></br>
              </span>{" "}
              The XRtistic Habitat project is an innovative solution designed to revolutionize how we approach interior design and space planning. By leveraging Extended Reality (XR) technology, this project allows users to create and visualize virtual objects, such as furniture and décor, within a physical room. This immersive experience enables individuals to see how different items would fit and look in their desired space, all without the need for physical objects. XRtistic Habitat was conceived to address the common challenges of interior design—specifically, the difficulty of envisioning how furniture and other objects will fit into a space. Whether you’re redesigning a living room, planning a new office layout, or simply trying to decide on the best furniture arrangement, XRtistic Habitat provides a powerful tool for making informed decisions.
            </p>
          </div>
        );
      })}
    </>
  );
};

const CS1332 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Data Structures and Algorithms <br></br>
              </span>{" "}
            </p>
            Hardcore course about, well, Data Structures and Algorithms. Coding involved writing complete classes, coding exercises, and problems for all major data structures and algorithms including
            arrays, linked lists (singly, doubly, and circular), stacks, queues, deques, binary trees, and binary search trees. The course covered traversal techniques (preorder, inorder, postorder, level-order), binary heaps with operations like upheap and downheap, and hash maps with both closed addressing and open addressing strategies. Advanced structures like skip lists, AVL trees, and 2–4 trees were explored, focusing on balancing techniques, rotations, and handling underflows/overflows. Sorting algorithms ranged from simple (bubble, insertion) to advanced (merge, quick, radix), alongside stability and adaptivity analysis. Pattern matching included Boyer-Moore, KMP, and Rabin-Karp algorithms, while graph theory encompassed BFS, DFS, Dijkstra’s, and Prim’s. Finally, dynamic programming problems like longest common subsequence and comprehensive Big O analysis rounded out the curriculum.
          </div>
        );
      })}
    </>
  );
};

const CS2110 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Computer Orgaization and Programming <br></br>
              </span>{" "}
            </p>
            This course provided a deep understanding of computer organization and programming, covering foundational concepts such as layers of abstraction, the Universal Turing Machine, and number systems (binary, decimal, hexadecimal) with conversions, fixed-length numbers, two's complement representation, and floating-point numbers. It delved into logic design, including CMOS transistors, combinational and sequential circuits, state machines, and memory architecture. Core topics also included the LC-3 architecture, instruction set, control signals, and assembly language programming, focusing on subroutines, traps, and I/O handling. The course introduced concepts of C programming, such as compilation flow, pointers, memory management, and data structures like linked lists, while bridging the gap between high-level C code and low-level LC-3 assembly through the LC-3 calling convention and stack management. Overall, this course built a strong foundation in understanding how software interacts with hardware at multiple levels.
          </div>
        );
      })}
    </>
  );
};

const CS3510 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Design and Analysis of Algorithms <br></br>
              </span>{" "}
            </p>
            My personal favourite CS course at Tech (so far). I learned a lot about building intuition and approaching algorithms. This course goes deep into mathematical analysis of
            Divide and Conquer, Graphing, Greedy, and Dynamic Programming algorithms and gave me a powerful toolbox of approaches I can use to design an algorithm to tackle
            questions in these concepts. Moreover, it introduced the travelling salesperson problem and the concepts of P vs NP, NP-Completeness, and NP-Hard. Sklled up my analysis skills
            in algorithms. Leetcode god? Maybe.
          </div>
        );
      })}
    </>
  );
};

const CS4726 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Privacy Tech and Policy Law <br></br>
              </span>{" "}
            </p>
            This course was co-taught by a lawyer and a CS prof, hearing which I went crazy. It taught me how to effectively design and evaluate privacy policies and
            opened my eyes to how important and core privacy is in software development. The perspectives I gained and the people I got to talk to was priceless. The class was
            filled with cream Georgia Tech students and the connections I got were incredible as well. The projects in this class involved me doing a lot of research about
            consequences of privacy policies, getting efficient at evaluating them, heck even making a whole PIA (Privacy Impact Assessment) for Niantic's Privacy Policy.
          </div>
        );
      })}
    </>
  );
};


//fill content later

const data = [
  {
    category: "Chrome Extension | FastAPI, React",
    title: "Privacy Pilot",
    src: "/PrivacyPilotSS.png",
    content: <PrivacyPilot/>,
  },
  {
    category: "Website | NextJS",
    title: "GTXR Website",
    src: "/GTXRss.png",
    content: <GTXRWebsite/>,
  },
  {
    category: "Web App | NextJS, Supabase",
    title: "ImmerseGT",
    src: "/ImmerseGTss.png",
    content: <ImmerseGTPlatform/>,
  },
  {
    category: "iOS App | Xcode, Swift",
    title: "KunstenAR",
    src: "/KunstenAR.png",
    content: <KunstenAR/>,
  },
  {
    category: "Ongoing | Unity, C#",
    title: "XRtistic Habitat",
    src: "/XRT.png",
    content: <XRtisticHabitatContent/>,
  },
  {
    category: "Course | Java, OOP, DSA | Completed",
    title: "CS1332",
    src: "/CS1332ss.png",
    content: <CS1332/>,
  },
  {
    category: "Course | Low Level Computing, Assembly, C/C++ | Completed",
    title: "CS2110",
    src: "/CS2110ss.png",
    content: <CS2110/>,
  },
  {
    category: "Course | Algorithm Design, Mathematical Analysis | Completed",
    title: "CS3510",
    src: "/CS3510ss.png",
    content: <CS3510/>,
  },
  {
    category: "Course | Privacy Tech, Policy Crafting, Clean Development | Completed",
    title: "CS4726",
    src: "/CS4726ss.png",
    content: <CS4726/>,
  },
  // {
  //   category: "Ongoing | Unity, C#",
  //   title: "XRtistic Habitat",
  //   src: "/XRT.png",
  //   content: <XRtisticHabitatContent/>,
  // },
  // {
  //   category: "Ongoing | Unity, C#",
  //   title: "XRtistic Habitat",
  //   src: "/XRT.png",
  //   content: <XRtisticHabitatContent/>,
  // },
];
