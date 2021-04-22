import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Source;


public class Cal {
    
    public static void main(String[] args) throws java.io.IOException {

        Context js = Context.newBuilder("js")
//                .allowExperimentalOptions(true)
//                .option("js.commonjs-require", "true")
//                .allowIO(true)
                .build();

        js.eval(Source.newBuilder("js", Cal.class.getResource("main.js")).build());

    }

}

