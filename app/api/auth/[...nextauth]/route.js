import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDb from "@/db/connection";
import User from "@/models/users";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      return session;
    },

    async signIn({ profile }) {
      console.log(profile);

      try {
        await connectDb();

        const user = await User.findOne({ email: profile.email });

        if (!user) {
          const newUser = new User({
            email: profile.email,
            password: profile.at_hash,
            image: profile.picture,
            givenName: profile.given_name,
            familyName: profile.family_name ? profile.family_name : null,
            isVerified: profile.email_verified,
          });

          const savedUser = await newUser.save();
          console.log(savedUser);
        }

        return true;
      } catch (error) {
        console.log("Google signin not working :", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
