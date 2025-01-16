import styled from 'styled-components';
import tw from 'twin.macro';

const ContactContainer = styled.div`
  ${tw`
    flex-col
    bg-white
    `}
`

function Footer() {

    return (
        <ContactContainer>
          <div className="flex md:justify-center max-md:px-6 pt-6">
            <div className="flex justify-start md:w-[729px]">
              <div className="flex items-end text-black">
                <svg version="1.1" width="173.73067" height="51.723999" viewBox="0 0 173.73067 51.723999">
                  <g transform="matrix(1.3333333,0,0,-1.3333333,-48.000401,4238.8667)">
                    <g transform="translate(0,-2.7400955)">
                      <g transform="translate(120.1103,3143.7522)">
                        <path
                          d="M 0,0 V 27.772 L -11.481,0 h -1.202 -1.914 -1.201 L -27.279,27.772 V 0 h -5.6 v 37.551 h 1.557 4.043 1.344 L -13.64,7.81 -1.345,37.551 H 0 4.043 5.6 V 0 Z m -43.46,0 h 5.6 v 37.551 h -5.6 z m -9.127,25.515 c -2.372,4.28 -6.932,7.179 -12.172,7.179 -7.681,0 -13.907,-6.227 -13.907,-13.908 0,-7.681 6.226,-13.908 13.907,-13.908 5.24,0 9.8,2.899 12.172,7.179 l 4.831,-2.518 c -3.281,-6.02 -9.665,-10.105 -17.003,-10.105 -10.687,0 -19.351,8.664 -19.351,19.352 0,10.688 8.664,19.352 19.351,19.352 7.338,0 13.722,-4.085 17.003,-10.105 z m 98.775,2.429 c -3.28,6.02 -9.664,10.105 -17.002,10.105 -10.688,0 -19.352,-8.664 -19.352,-19.352 0,-10.688 8.664,-19.352 19.352,-19.352 7.338,0 13.722,4.085 17.002,10.105 l -4.831,2.517 C 38.986,7.688 34.425,4.789 29.186,4.789 c -7.681,0 -13.908,6.227 -13.908,13.908 0,7.681 6.227,13.907 13.908,13.907 5.239,0 9.8,-2.898 12.171,-7.178 z"
                          fill="currentColor" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="pl-[175px]  max-md:hidden">
                <p className="leading-none text-cimc-forward text-black font-bold">
                  CALIFORNIA INSTITUTE
                  <br />
                  FOR MACHINE
                  <br />
                  CONSCIOUSNESS
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:justify-center max-md:px-6">
            <div className="sm:flex py-12 md:w-[729px]  text-black">
              <div className="space-y-4 mr-3">
                <div className="sm:flex text-sm space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="cimc-normal leading-snug">
                    <span className="text-cimc-heading">© 2025</span>
                    <br />
                    <span className="text-cimc-subheading">California Institute for Machine Consciousness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContactContainer>
    )
}

export default Footer
