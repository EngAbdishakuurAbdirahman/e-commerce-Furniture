// import React from 'react';
// import { motion } from 'framer-motion';

// // Sawirada aad i siisay ku beddel path sax ah ama URL sax ah
// const testimonials = [
//   {
//     id: 1,
//     name: "Doris Watson",
//     image: "https://i.pravatar.cc/100?img=1",
//     feedback: "Highly recommend this website for quality flowers and plants. Great prices, timely delivery, and excellent customer service."
//   },
//   {
//     id: 2,
//     name: "Kate Szu",
//     image: "https://i.pinimg.com/736x/30/0e/06/300e06a1fa5d13c09bfd01957f8a40c7.jpg",
//     feedback: "Great service, beautiful flowers, timely delivery. Highly recommend!"
//   },
//   {
//     id: 3,
//     name: "Dyness",
//     image: "https://i.pravatar.cc/100?img=8",
//     feedback: "I am very happy with my purchase from this website, the plants were healthy and arrived on time."
//   }
// ];

// const Testimonials = () => {
//   return (
//     <div className="bg-white py-12">
//       <h2 className="text-3xl font-bold text-center text-green-800 mb-8">What Do They Say About Us</h2>

//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {testimonials.map((testimonial, index) => (
//           <motion.div
//             key={testimonial.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.3 }}
//             className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center relative overflow-hidden"
//           >
//             <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-200 mb-4">
//               <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover"/>
//             </div>
//             <h3 className="text-xl font-semibold text-green-800">{testimonial.name}</h3>
//             <p className="text-gray-700 italic mt-3">"{testimonial.feedback}"</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React from 'react';
import { motion } from 'framer-motion';
import prof from "../../assets/prof.png"
//import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        name: 'Marck Zuber',
        text: 'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzIWfinWOAjPSyuvJHc8fknPXp4UL3o61BEfYTWeNACBwM75HTbr-qFJGt6yPQIHbNNM&usqp=CAU',
    },
    {
        name: 'Maria Walliam',
        text: 'Great service, beautiful flowers, timely delivery. Highly recommend.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4ebLbg4W9sbwC4ZB_I1m9LXSKlazY148Cv-m8Yy-MiwjKeobBcut0Ec7oosD7jtEOlI&usqp=CAU',
    },
    {
        name: 'Dyness',
        text: 'I am very happy with my purchase from this website, the plants were healthy and arrived on time.',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUXFxoXFRUXGBUWFhgVFxUYGBcVGBYYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4AMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgQFBgEDBwj/xABEEAABAwIDBAYFCQUIAwAAAAABAAIRAwQSITEFBkFRImFxgZGhBxMUMrEjQlJicpLB0fBjgrKz4UNTc5OiwtLxFSWj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAIREBAQACAwEBAQADAQAAAAAAAAECEQMhMRJBBCIyURP/2gAMAwEAAhEDEQA/AO4oQhACEIQAhCEAIQqbvR6RrS0ljD6+sMsDCMLTyfUzA7BJHJAXJQe297rG1kV7hgcP7NsvqfcZJHeuK7wb+311INX1VM/2dKWCPrO953jHUquKaeYl265tT0yUhIt7V7/rVXCmO0NbiJ74VXvvSttF84DSpDhgp4j41C4HwVPZauOnxAWw7PdxIB1iUW4xsmVSdffbaT/evav7paz+ABNHbwXp1vLn/Prf8lqp2GQJJjqGZ7JOa2VrZoBwg5DtM8tcu1JeXCG/8si2bw3g0vLn/Prf8k+t99dos928q/vFr/4wVBOonUgjtSQn3LNk1d6Xiy9Ke0WRjNKqOONkHxploHgrNsz0w0jAuLZ7PrU3CoO0tdhI7pXKhakiR3jiOSblqyfN8bZZ69I7F3tsrqBRuGFx+Y6WVPuOgnuU2vKkK0bA38vrWAKvraY/s6svEfVd7zfGOpFxEr0GhU7dj0i2l1DHn1FU5YHkYXHkypoewwTyVxStCEIQAhCEAIQhACEIQAhCEAKP23tqhaUzVrvDG6Aaucfotbq4qO3x3so2FOXdOq4fJ0gYJ+s4/NYOfhK4TtzbNe7qmtXfidoAMmsb9FjeA8zxlbIy1YN7vSDcXc06RNChphaem8fXeOH1RlzlUwsWwJTWym8Z60tYsVa+FwaAC45CZHmnluwayABnn8O1Mbtk1Q8aHhxEHJRz5fyLYcf7U9Rp9DE0Tz+ce5Rda5J6PIkkZfNPHPkezJOKF36vIZcf0Ev22nUguyd9WIOfEH81zy39X1EfSuSThMDPXWTzEp4a7Bk93vcIInsiR+CxXpUzOIFw0za3q4hxyUbdQA403TGUajQnP7pz6wt1tm9J229W5pDnR4H8k4/8fRjM4jwABEk8SZVSo3FQNDgXCZzbhMGdMJM6QpOntAjC05uMwQ0AgAa9WYPmjVjdyn1ah6qNAC6ciS4CI0E8QtHskgGcvxnTt18FmnbtqiA4iZLcWmKO3sTirQc2MsXWJdGQmIMTkiWysslRtWmRqFrKkHglsOAaB2E9UloIBUdhMforow5N9Vz54a8YKue6HpDubSKdWa9DTC4/KMH1Hnh9U5csKpqE9pI9N7D21Qu6Qq0Hh7dCNHNP0XN1aVILzJsPbde0qitQfhdoQc2vb9F7eI8xwhd43M3uo39OW9Cq0fKUiZLfrNPzmHn4wsasaEIQAhCEAIQhACr2+e9NOxo4jDqrpFKnzPFx5NEiT2DipLbu1qdrQfXqnotGQ4ucfdY3rJXn7bu1qt1WdXqnpO0A0Y0aMb1DzMnUrQabSvqleq6tWeXvcZJPkAOAGgCakLZCwQmY1l0CSmNS4JzJjPLXyW69rRkTnwH49qaurAjogE6QefUe9Qzz31FcMdN7K+OADygdnHJJuWs+lJ46gd066pi3HqBEdULe1zCyTOL9QVOqHlxRcwAuMzoOrVsdX5LUAcRwxlx4gZwfJNaFZ7oDiSMwOMd3JOw7AQ7r4DI55iOPks8N6k6byQASe0ceH5+S1Mt+DZgjUjM885P6JTOtVJMsEN/WScUqpAJMgc+Y6is23TVcW0AROR0iNeJMadf9EFwGrAconiBnIy7+PFOqderhAJkeBE6Z6wtVeG55zPAEkORsXFi2fhJcCS0ic8jmDl2a9vkH1JgDBoQTBBy4EyPhodU1Z0pd0eRBOHKDJg5TmpCgyngBcCIOTgREjQEH4otZoyqeqbkGHLTWAT8NOaRs4h1Qt1JbMAEjxyz7k9q2wOY0LZOROWsR4LTa27Q7LIak56Dh2rZ0ym9anC1FTdyQKYAazEcy50Egn5ozjQDxULXaQrY5fSOWOiCVv2btGrb1W1qLyyowy1w8wRxadCOKbSsKkie3ozcje2ntCjiENqsgVac+6To5vNhgwe0cFZF5f2BtmrZ12XFE9JuoPuvafeY7qPkQDqF6P3f2zSu6DLikei4Zg6tcPeY7rByRYJUihCFjQhCqHpM3g9mtSxhirWljObWx8o/uBA7XBAc99JG8vtdx6tjvkKJIbGj36OqdY4Dqk/OVSSVkFNpm2YWHBZlBQNoCrRc9xBMalFvQwAhx78suE9qRUuWlxxHQ5aA58jPkkYJOUnrJ/Jc9i8OKjIbkcU5yOXWNRCbvtXkjD+gl0muiAYz1Uxs2iY6WvMcklulMcdkWFlhbEgnjGvYn9tsh9QxwnUjNP7OiFPbOZEKOWVdGOEpnZ7tsa3LXindPdpnzpM8JMeCsFuxb8MqctWmMirXWwhhMCI0UVV2diGoniujMpCM01OzGSS0CTrkIP5Jpay4yuYVNm1AS4dkjQpo+ycSMOU6iSRyn+i7Fb7LB18ASR5pFfYdLFiDBiGhIz7kfdTvHHMmtcxsECNCDOfaNB4KPruwD5MRJgTORiTr2BdHutmNdMgAHX8+Cql1s8BzwRoM+vpGPgnwz2nycekDRuyIbUGWoORz1nWf0Eq7qYh+I5cE2fatZ/aOgZwZwjrnh8Eq7rcOR0iFbHqufLuNKzCzhWYXU5iFdPRfvR7Hc+rqOihWIa+dGVNGVOofNPVB+aqdhRCKHq1Cpnot3i9qtAx7prUIY+dXMj5N57QCCeJaSrmlMFwP0g7Z9qvajgZZT+Sp8oYTid3uxGeULsW+W1fZrOtVBhwbhZ9t/Rae4me5eek+MLlSSstCQVsYVSxOUoNWm/dFNxHI/Bb8aZ7UcfVOjkkvh56rBJ1OSfWwnsUM58mFNWrsgOfwhc+ToxSVlRkdqkqAWii2BCcUtVz5OjFI2RzU9ZjRQFsIU7s6qpZL4VN2zoT5iYtOQTmgEsVOGuSqTwtTSs03LW6SNNyzUOS1tKzURU/0wuGqqbVtpeTpp55R2ZBXCu1V7bTMgfreXFLj1WZ9xRdtW0PlhyJg65Hge8cOpRbrYZHONSOsFSV9Vl9Rs89dOiT+TkxIyHYu7jm68/kuoSsrCyuhBlYWUI0Fl9HW2/Zb6m4mKdT5Kpyh5GF3c7CZ5SvQq8qEL0fuRtb2qyoViZeW4an+Iw4XHvLZ71ljZVQ9NN/DLe3B95zqjv3Rhb/G77q5XCuHpXu8e0HN/u6bGd5BqH+Z5Knyq4zpPK9jCsOC2NK11ExSAUm4bLHDmD8EoBZIRRFEqaqXsXwMXPIdibVLbE4wMpI+KdbPo4gOQyXFk7MVhpPmCdU6o6hNqWizUuw3VQrpnUT9vTUpbUSCqtZ1atQ9Fp6uXmU9r0r1oBDSQNYIk+SW4nmWlvtnKRovXNKO8Vam6Htd3hWrZm2xUASXHSuGcvSxF6VTeCo/EZPYkWl1kZSrXxYaNRbC6VRb/AHtDDACLPemo75h7gdO1NrpC5Ta6VR4Ku7bq4RJ6/gt1DbYOveDqo7eOoDSBHGf4Ssk7Zl45q26DqhdxxOy+1+vNPKuukKKp0oqEYoz71LPJOq7+L153L41QlBqUGpQCvpz2kQiEsrCbTNkELrPoQ2hLLi3J91zarf3xhdHZgb95cphXL0SXfq9otb/e03s7wBUH8s+KW+Gl7Rm+lfHf3Tv2zm/cOD/aoUJ7t103NwedeqfGo5MwqTxOsrBWZWChoAWHNPATGZHUshOLTU/ZKly/61bg/wB4iqzG4g4DI69Ry/JNbekGFw8O8BTns4NKY7ezioJx+Ug9XguOXcdueOrtL06eQPHRa3WnSl3nyTmzzIUnXtA7sSbNpG09t+qB9W2SAT4cYS7Te66cSwvptgE4SDOQaeWU4oHMtPfL2myWfmOae2e71Fpa8RIzAJJA5QCYyTy4/oyxzvlQ+0bioHYLim2ToRxnkePkmNB5Y/KQJ0KuW0bVr5LyXd5g9o0VfuqEmeAEBJdH1Yt2wxjAPMJhvJb+rgCROZhON1LjKOSnL2iHz2R1+Kjp0W9OdOv6NISKWMjUkcVIbM32iMVtDZAnrOmUeeid3WxGkFgkB0csiDkmmzdyQKmOZE4oA1cPdBMmANYAV8Zjrv1zZ/e+vE067oXLZa2HES3rI5EalRty2bfMEQ8juwFSFvu1gfjBjpYsIzE8/Mpe8FsG0TwEj4xw7VK+nvjmQtumXESAYJ6/0CnEJxcMLSWngStYC7+LHWLzOXLd0RCISisK8QpJWISiEQtrIxCmty62C/tXftmt++cH+5Q8J9sIxc255V6R8KjUlPBtoRc1xyrVR4VHJmFLb3UMF9dN/bVD3OcXDycooKsvSdnYWEpYCwwCzP5eSEEJM5vGw/HdZSnRIIgcQoS9oRWEcB8MlN0aYcBy4HiOpRt+wh8HgMjzEnNefHqcnZdm+CFZ9nvDolVOkpaxuCEtGC6UrAELcLKE12Zd5aqTdVBSbX+EPtJ0CAVB1KykttVIBKq9S4cTPBb3WXpZ926hDtOKtpqw6eYVQ2A6QB3q0FpwzOiWqyTTZXt8XSaO0LXQpvByW+xuA4SCnjXjkjadmmtlM6uUDvbWApHrIjxn8FPXVxAUBcWZrvbi91hxkc9Q0dWpRvstxVDeakG18uLGE9uH+gUUn23qxdcVSfpEfdyjyTEL1OOf4x5HLZc7r/rCISgFmFSJEwiEuEQsBEJ5sRs3NAc61If/AEamsKW3SoY761b+2pn7rg4+TVlbEp6UrXBtGof7xrKg+7gPnTKqgK6b6arDO3uAPpUnH/WwfzFzEBPj3C5dVlZCAEqFlrYxCUAgBKAWbNou3qYcjodO/gm+1hLx9n8f6rdhTK+yLc51/BcvJx6v1HZxc2580WozT3DBCZ2hzUm9vRBXPV8Uxs+tkpdlXLNVy3fACfe05Kdjqxy6attmWmVU696GgDl1EqwXdWVFGzDj2qmMTzuzjY228MK1228LSI1nIDiSVVDsloInKVadmbPYzC4CTGv5Iykbhll4lcBYQ4ZA6jkVIU60hNDUkQc1poVYy4qF6W2d3dThzWbN4Y173GGjU/ZE/im7QS5VHefaj3PdQGTGnP6xyOfYn4sLnlpz83JMJtBPdiJJ4knxMoAQAlgL1Xj1iFkBZhZCAxCISkoBG2NUK1+i+0x7RpnhTa+ofu4B5vCq7l0r0M2OdxXI+jSaf9bx/LWXxs9Wz0g7L9osazQJcwetZzxU8yB1luId64GvT5Xnre/Y/st3VogQycVP/Ddm2OzNv7pTcV/Gcs/UOFlYWQrfERmZQS2pISmqeWKuORcKK2s7pt6h8T/RSwCitpCXHqj4Ln5brF0cU3kzZnOFJ1Xw3vULQfBHgfwKl31AWrlsdkp4Gy2RwWqteYW5rZsernBWzaNFhMAKe9VSdzpDuvw7QhPbG4bIJcOvNMq1sJzAPxTmyNEe+xvePxT/AI3Gd91aBRovaHB4I5rbTrtAhrwY7FHWlG05DPhJ+EqQZs6gYIptI7B/2VOr6jUNsAOiR1qTtxiOIaQmV9selGIMaD1AD4J/aODaYCTK7J3G2lzVA2i/FWqO5vd4TkrjtS9DKZI1jLt/7VJhdX8uPtcP9eXkJASwEQsgLtcQhELMIQCYSpQsgIYTC7vuFsz2expNIhzh6x/OX5gHrDcI7lyTdLY/tV1SpES2cVT/AA25u8cm/vBd8SZU+MConpX2D663FywS+hOKNTSPvfdPS7MSvaw9oIIIkHIg5gjkVmN1dmym5p5lDUoNVg303eNncFgB9U+XUj9Wc2TzacuyDxUEAuz63HJ86pICW0LCTXrtY0vcYAEn8kmR8Sby9ZSEvMcgMyewJtdtIfmILmh0d2nkVBbPLrm6YXaYsUcmtzDfGFcttWZLBVA93J32TofH4rj5e47eCavaDNvOmo06xyW2yqcCtlMcRw+BWbihPTZqNetc23VcWxri1yfOfInRRQrhw605trgQssbKcPpyFpp25zESpC3eFNWDGfOaD3BG9KYzaG2fan6KslpSwjLVPbbBwA8E4c3kAkyu1JNG+DIzmVHPdB6hwUjc1g1vBVva1981vHU9SzDC5ZaifJyTGbpjtS6xugaD4plhS4WQF6mOExmo8nLO5Xda8KxC3QkkJikLEJULBQxgBbGhJCsO5ewDeXAYR8kyHVT9Xg2ebjl2SeCWti++i/YfqqBuHjp1ow9VIe7949Lswq7LDWgAACAMgBoByWVNUIQhAQ+9WwWXlA0nZOHSpv8AovGh7DoRyK4Te2j6NR1Ko3C9hhw5H8QRBB4ghejlUPSBul7XTNWiB7SxpwScIqAZ+rceHUeE8jk+GWvSZ478cXq1Q0FzjAGpVS2ztM1TAyYNBz6yjaleq57mVZa5ji11MgtLXDItLeBHWo94W5Z7GGGj/dy4wXFInQnCf3hHxIXWaFMHIiQRBHMFcWA5eK7Ju7deuoU6vEtz+0MnDxBU1Yrm0rA0KkZlh909XI9YWGjiP+wrtdWbajSx4kHxB5jkVU72wdQdhObD7juB6jyPUufkw13HXx5y9VD3VtBkaHyTcyFMuZK0OtUspssWmhd81Y9lX7TkYVbq2R4LWxtRumSLJWY2xePa2g+8t79qtA1VJoMqPIE6qxWWysJBeZSXGQ8ytbX1HVTJyaNBz6yom5MuPLQdgU3tB2ClUc0SWsc6OwTKgaLw5ocNCJV/5cd21zf15akxYwrIC2YUELtcLUQkkLaQkELA1kIhbMKXSoOcQ1oJcSAABJJOQAHErGixs31ajaVNuJ7zDR1/gBqTwAXdN1thMs6ApNzcelUf9J51PYNAOQUXuNumLRnrKgBrvGfEMb9AHnzP5K1pLT4zQQhCUwQhCAEIQgOfekz0b09oA16GGndtGujaoGjKnI8ncNDI08739jUo1H0azDTqMMOY4QQfxHEEZEZheyVWN9tyLXaVOKowVWj5Ou0DG3qP02fVPdBzQHlQhX30Y7RzqWxOvyjPIPH8J8VD747lXeznxXZNMmGV2SabuQJ+Y76ru6dVFbHvTQrU6zfmOkjm3Rw72krWu44EivateCHNDmnVp+I5FbreoHta9plrgCDzBEhbWNQZUdobENMF7Zczn85vU4fimBtyug4Yzjt6+1R13sUQX0hlq5nFvZzb8FzcnHZ3HVxcsvWSqMo81sbZg8FJvszwC1NpOHBS+l/k0srPDUkfgppjZSLe2cczkp7ZGxfXQ50iiO41Oocm8zx81neV1GWzCbppf7ODNm3NQjp1KL46mBpIjtInwXJbO9ezIZjkV3Lfd0WNzyFCp2e4QAuBzmF24T5mo8/O/dtqxWu0WPyPRPI6eKfBiqUp1abSezQyPonTu5KkzSuH/FjNNayxa7TabH5ThPI/gVYNhbu17p0U2w0HpVHZMH/I9Q8lu2aRNpavqPFOm0ue4w1ozJK6xudui21HrakOrka6imDq1vXzd3dslu7u5RtGwwYnkdKofePUPot6h56qYSWmkCEIWNCEIQAhCEAIQhACEIQGq5t2VGuZUY17HCHNcA5rgdQQciFyre30MUnzUsHii7X1LyTSP2XZup9nSHIBdaQgOQbmWNzQpG1u6L6b6R6BObH0ySRgeJa6DIgGQImFYPZ1fnNBEESORTC42PSdoMJ6tPBDdqwyiVto28GRkVMO2O4aEHyKR7G8atPx+CBtGXOxW1Ok2Gv4/RcfwKiqex3mZhoB95zhGXZK0ekHe/2NooUpFaoM3xlSaeMnLGeA4a8p5odsPqEh1VziADm8kdkTkubkmMvj0/5eHl5MN76dV2PRtn1RSfc0XVBmKDKrHHLmAZP61Vvc0Du0C851boU4cx2FwIc05AgzqDwMrtW428Xt1oyqR8oOhUA0xD5w6jqn4rPyI/2cGWGrctm+/wCf/X3J/ZkeJAXByQYXovebZNSvaVqTGFz3shoyEmRxdAXONleh28fBr1qVEcm4qr+yBhb/AKirOKOfAqS2PsG5u3Ybai6oZzcBDB9p56I7CZXaNi+izZ9GHVGuuHDjVPQ/y2w0j7Uq6UKLWNDWNDWjINaAAByAGQQNuZ7q+iSmyKl88VXa+pYSKYP1nZOf5DnK6bQotY0MY0NaBDWtAAA5ADQJaEMCEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhAJq6FVe/wDeQhLVeL1my1VnpaBYQjHwcvpaEITJBCEIAQhCAEIQgBCEIAQhCA//2Q==',
    },
];

const TestimonialCards = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-green-700 mb-8">What Do They Say About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-4 bg-white shadow-lg rounded-2xl text-center hover:shadow-xl transform transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                        </div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 mt-2">"{testimonial.text}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCards;
