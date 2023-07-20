package org.ve.apigateway.filter;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;



import io.jsonwebtoken.Claims;
import org.ve.apigateway.exception.JwtTokenMalformedException;
import org.ve.apigateway.exception.JwtTokenMissingException;
import org.ve.apigateway.util.JwtUtil;
import reactor.core.publisher.Mono;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@Component
public class JwtAuthenticationFilter implements GatewayFilter {
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = (ServerHttpRequest) exchange.getRequest();

//        Bypass endpoint
        final List<String> apiEndpoints = List.of("api/auth/login", "api/auth/registration", "api/avatars/test",
                "api/stats",
                "api/exhibitions",
                "api/stalls/booked",
                "api/agora/{exhibitionId}/{stallId}",
                "api/stalls/{exhibitionId}/stallId?stallId={stallId}");

        Predicate<ServerHttpRequest> isApiSecured = r -> apiEndpoints.stream()
                .noneMatch(uri -> r.getURI().getPath().contains(uri));

        if (isApiSecured.test(request)) {
            if (!request.getHeaders().containsKey("Authorization")) {
                ServerHttpResponse response = exchange.getResponse();
                response.setStatusCode(HttpStatus.UNAUTHORIZED);

                return response.setComplete();
            }

            final String token = request.getHeaders().getOrEmpty("Authorization").get(0);

            try {
                jwtUtil.validateToken(token);
            } catch (JwtTokenMalformedException | JwtTokenMissingException e ) {
                // e.printStackTrace();
                log.info(token +"*"+e.toString());


                ServerHttpResponse response = exchange.getResponse();
                response.setStatusCode(HttpStatus.BAD_REQUEST);



                return response.setComplete();
            }

            Claims claims = jwtUtil.getClaims(token);
            exchange.getRequest().mutate().header("id", String.valueOf(claims.get("id"))).build();
        }

        return chain.filter(exchange);
    }

}
