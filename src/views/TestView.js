/** @jsx jsx */
// npm run start
// edit in AuthorizedView.js and test in the same place
// ask for help in creating a new presenter file
import { jsx } from "@emotion/react";

export default function MyComponent(props) {
  return (
    <>
      <div
        stackColumnsAt="tablet"
        space={0}
        css={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1140px",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingRight: "16px",
          paddingLeft: "16px",
          backgroundColor: "rgba(248, 249, 250, 1)",
        }}
      >
        <div
          className="builder-columns"
          css={{
            display: "flex",
            "@media (max-width: 999px)": {
              flexDirection: "column",
              alignItems: "stretch",
            },
          }}
        >
          <div
            className="builder-column"
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "calc(8.05% - 13.333333333333334px)",
              marginLeft: "0px",
              "@media (max-width: 999px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                display: "flex",
                maxWidth: "89.278076171875px",
              }}
            >
              <div
                css={{
                  display: "flex",
                  maxWidth: "29.278011322021484px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  height: "48px",
                  width: "29.278011322021484px",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    maxWidth: "16.132766723632812px",
                    height: "48px",
                    width: "16.132766723632812px",
                    backgroundColor: "rgba(248, 186, 209, 1)",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      maxWidth: "16.132766723632812px",
                      height: "6.771784782409668px",
                      width: "16.132766723632812px",
                      backgroundColor: "rgba(196, 196, 196, 1)",
                    }}
                  ></div>

                  <div
                    css={{
                      display: "flex",
                      maxWidth: "5.775934219360352px",
                      height: "48px",
                      width: "5.775934219360352px",
                      backgroundColor: "rgba(196, 196, 196, 1)",
                    }}
                  ></div>
                </div>

                <div
                  css={{
                    display: "flex",
                    maxWidth: "29.278011322021484px",
                    height: "48px",
                    width: "29.278011322021484px",
                    backgroundColor: "rgba(253, 87, 11, 1)",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      maxWidth: "9.560166358947754px",
                      height: "48px",
                      width: "9.560166358947754px",
                      backgroundColor: "rgba(196, 196, 196, 1)",
                    }}
                  ></div>

                  <div
                    css={{
                      display: "flex",
                      maxWidth: "29.278011322021484px",
                      height: "10.954357147216797px",
                      width: "29.278011322021484px",
                      backgroundColor: "rgba(196, 196, 196, 1)",
                    }}
                  ></div>
                </div>
              </div>

              <div
                css={{
                  maxWidth: "52px",
                  color: "rgba(33, 37, 41, 1)",
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  textAlign: "left",
                  fontFamily: "SF Pro Display, sans-serif",
                }}
              >
                Listify
              </div>
            </div>
          </div>

          <div
            className="builder-column"
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "calc(1.8% - 13.333333333333334px)",
              marginLeft: "20px",
              "@media (max-width: 999px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "0px",
                justifyContent: "flex-start",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingRight: "20px",
                color: "rgba(33, 37, 41, 1)",
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0px",
                textAlign: "left",
                fontFamily: "SF Pro Display, sans-serif",
              }}
            >
              <div _text=""></div>
            </div>
          </div>

          <div
            className="builder-column"
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "calc(90.06% - 13.333333333333334px)",
              marginLeft: "20px",
              "@media (max-width: 999px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "998.721923828125px",
                justifyContent: "flex-end",
              }}
            >
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "80px",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "48px",
                    justifyContent: "center",
                    borderRadius: "4px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingRight: "16px",
                    paddingLeft: "16px",
                    color: "rgba(33, 37, 41, 0.5)",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    fontFamily: "SF Pro Display, sans-serif",
                  }}
                >
                  Playlist
                </div>
              </div>

              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "76px",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "44px",
                    justifyContent: "center",
                    borderRadius: "4px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingRight: "16px",
                    paddingLeft: "16px",
                    color: "rgba(33, 37, 41, 0.5)",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    fontFamily: "SF Pro Display, sans-serif",
                  }}
                >
                  Tracks
                </div>
              </div>

              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "124px",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "124px",
                    justifyContent: "center",
                    borderRadius: "4px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingRight: "16px",
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "row",
                      maxWidth: "92px",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      css={{
                        maxWidth: "47px",
                        color: "rgba(33, 37, 41, 1)",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        textAlign: "left",
                        fontFamily: "SF Pro Display, sans-serif",
                      }}
                    >
                      Search
                    </div>

                    <div
                      image="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c"
                      backgroundPosition="center"
                      backgroundSize="contain"
                      aspectRatio={1}
                      css={{
                        display: "flex",
                        position: "relative",
                        minWidth: "20px",
                        minHeight: "20px",
                        maxWidth: "24px",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "24px",
                        marginLeft: "12px",
                      }}
                    >
                      <picture>
                        <source
                          srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c"
                          type="image/webp"
                        />

                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c"
                          srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F630c998b30534a9d8ac0ba89dc86b75c"
                          css={{
                            objectFit: "contain",
                            objectPosition: "center",
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            top: "0",
                            left: "0",
                          }}
                        />
                      </picture>

                      <div
                        className="builder-image-sizer"
                        css={{
                          width: "100%",
                          paddingTop: "100%",
                          pointerEvents: "none",
                          fontSize: "0",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
