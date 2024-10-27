import logocimc from './assets/logocimc.svg'

export function CIMCLogo(): React.ReactNode {
	return (
		<img className="select-none" src={logocimc} alt="CIMC" />
	)
}

interface FullCIMCLogoProps {
	color: string;
	logoScale: number;
	isSmallText: boolean;
}

export function FullCIMCLogo({ color, logoScale, isSmallText }: FullCIMCLogoProps) {
	const ogWidth = 173.73067
	const ogHeight = 51.723999
	const width = logoScale * ogWidth
	const height = logoScale * ogHeight

	return (
    <div className={`${color} flex justify-end`}>
        <div className="w-6/12 max-md:pl-3">
        <svg version="1.1" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <g transform={`scale(${logoScale})`}>
            <g transform="matrix(1.3333333,0,0,-1.3333333,-48.000401,4238.8667)">
                <g transform="translate(0,-2.7400955)">
                <g transform="translate(120.1103,3143.7522)">
                    <path
                    d="M 0,0 V 27.772 L -11.481,0 h -1.202 -1.914 -1.201 L -27.279,27.772 V 0 h -5.6 v 37.551 h 1.557 4.043 1.344 L -13.64,7.81 -1.345,37.551 H 0 4.043 5.6 V 0 Z m -43.46,0 h 5.6 v 37.551 h -5.6 z m -9.127,25.515 c -2.372,4.28 -6.932,7.179 -12.172,7.179 -7.681,0 -13.907,-6.227 -13.907,-13.908 0,-7.681 6.226,-13.908 13.907,-13.908 5.24,0 9.8,2.899 12.172,7.179 l 4.831,-2.518 c -3.281,-6.02 -9.665,-10.105 -17.003,-10.105 -10.687,0 -19.351,8.664 -19.351,19.352 0,10.688 8.664,19.352 19.351,19.352 7.338,0 13.722,-4.085 17.003,-10.105 z m 98.775,2.429 c -3.28,6.02 -9.664,10.105 -17.002,10.105 -10.688,0 -19.352,-8.664 -19.352,-19.352 0,-10.688 8.664,-19.352 19.352,-19.352 7.338,0 13.722,4.085 17.002,10.105 l -4.831,2.517 C 38.986,7.688 34.425,4.789 29.186,4.789 c -7.681,0 -13.908,6.227 -13.908,13.908 0,7.681 6.227,13.907 13.908,13.907 5.239,0 9.8,-2.898 12.171,-7.178 z"
                    fill="currentColor" />
                </g>
                </g>
            </g>
            </g>
        </svg>
        </div>
        <div className="md:pl-[175px] max-md:w-6/12">
        <p className={`leading-none whitespace-nowrap cimc-${isSmallText ? "small-" : ""}logo-copy`}>
            CALIFORNIA
            <br />
            INSTITUTE FOR MACHINE
            <br />
            CONSCIOUSNESS
        </p>
        </div>
    </div>
  )
}

export function ResponsiveCIMCLogo() {
	return (
		<>
			<div className="flex justify-center pt-6 max-md:hidden">
				<div className="flex justify-start w-[729px]">
					<FullCIMCLogo color="text-white" logoScale={1} isSmallText={false} />
				</div>
			</div>
			<div className="max-md:px-6 md:hidden">
				<FullCIMCLogo color="text-white" logoScale={0.58} isSmallText/>
			</div>
		</>
	)
}